<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Storage;

class ProductController extends Controller
{
    public function index()
    {
        return Product::where('store_id', auth()->user()->store->id)->with('categories','tags')->get();
    }

    public function show(Request $request)
    {
        return Product::where(['store_id' => auth()->user()->store->id, 'id' => $request->id])->with('categories','tags')->first();
    }

    public function create(ProductRequest $request)
    {
        $data = $request->all();
        if ($data["picture_id"]) {
            $temp_file = Storage::files("temp/products/{$data["picture_id"]}/");
            $file_name = str_replace("temp/products/{$data["picture_id"]}/", '', $temp_file[0]);
            $data['picture'] = $file_name;
            Storage::move("temp/products/{$data["picture_id"]}/$file_name", "/products/$file_name");
            Storage::deleteDirectory("temp/products/{$data["picture_id"]}");
//            if ($data['picture']) {
//                Storage::delete('products/' . $data['picture']);
//                $data['picture'] = '';
//            }
        }
        $data['store_id'] = auth()->user()->store->id;
        $product = Product::updateOrCreate(['id' => $data['id']], $data);
        $product->categories()->sync($data['categories']);
        $tagArr = [];
        // Loop through the tag array that we just created
        foreach ($data['tags'] as $tags) {
            // Get any existing tags
            $tag = Tag::where('name', '=', $tags)->first();
            // If the tag exists, sync it, otherwise create it
            if ($tag == null) {
                $tag = new Tag();
                $tag->name = $tags;
                $tag->slug = str_slug($tags);
                $tag->save();
            }
            $tagArr[] = $tag->id;
        }
        $product->tags()->sync($tagArr);
        return ['msg' => trans('app.save_success'), 'data' => $product];
    }

    public function delete(Request $request)
    {
        $data = $request->all();
        $product = Product::where(['store_id'=>auth()->user()->store->id,'id'=>$data['id']])->first();
        Storage::delete('products/'.$product['image']);
        $product->categories()->detach();
        $product->delete();
        return ['msg' => trans('app.save_success')];
    }

    public function uploadTempPhoto(Request $request)
    {
        $v = Validator::make($request->all(), [
            'picture' => 'required|mimes:jpg,png,jpeg|max:5000',
        ]);
        if ($v->fails()) {
            return $v->validate();
        }
        $file = $request->file('picture');
//        $extension = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
        $temp_name = ((int)rand(1000, 100000));
        Storage::put("temp/products/{$temp_name}", $file);
        return ['image_key' => $temp_name];
    }

    public function deleteTempPhoto(Request $request)
    {
        $temp_file = $request->getContent();
        Storage::deleteDirectory("temp/products/$temp_file");
    }
}
