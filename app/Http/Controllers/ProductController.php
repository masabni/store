<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use App\Models\Tag;
use Cart;
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
        return Product::where(['store_id' => auth()->user()->store->id, 'id' => $request->id])->with('categories','tags','product_specs','product_images')->first();
    }

    public function create(ProductRequest $request)
    {
        $data = $request->all();
        $temp_file = Storage::files("temp/products/{$data["picture"]}/");
        $file_name = str_replace("temp/products/{$data["picture"]}/", '', $temp_file[0]);
        Storage::move("temp/products/{$data["picture"]}/$file_name", "/products/$file_name");
        Storage::deleteDirectory("temp/products/{$data["picture"]}");
        // the old main image does not get deleted !
        $data['picture'] = $file_name;
        $data['store_id'] = auth()->user()->store->id;
        $product = Product::updateOrCreate(['id' => $data['id'], 'store_id' => auth()->user()->store->id], $data);
        $product->categories()->sync($data['category']);
        $tagArr = $this->saveTags($data['tags']);
        $product->tags()->sync($tagArr);
        //TODO
        $product->product_specs()->delete();
        foreach ($data['product_specs'] as $spec){
            $product->product_specs()->updateOrCreate(['id' => $spec['id']], $spec);
        }
        $this->deleteProductImages($product);
        $this->saveProductImages($product, $data['pictures']);
        return ['msg' => trans('app.save_success')];
    }

    public function saveProductImages($product, $pictures)
    {
        foreach ($pictures as $picture)
        {
            $temp_file = Storage::files("temp/products/{$picture}/");
            $data["image"] = str_replace("temp/products/{$picture}/", '', $temp_file[0]);
            Storage::move("temp/products/{$picture}/{$data["image"]}", "/products/{$data["image"]}");
            Storage::deleteDirectory("temp/products/{$picture}");
            $product->product_images()->create($data);
        }
    }

    public function saveTags($tags)
    {
        $tagArr = [];
        // Loop through the tag array that we just created
        foreach ($tags as $t) {
            // Get any existing tags
            $tag = Tag::where('name', '=', $t)->first();
            // If the tag exists, sync it, otherwise create it
            if ($tag == null) {
                $tag = new Tag();
                $tag->name = $t;
                $tag->slug = str_slug($t);
                $tag->save();
            }
            array_push($tagArr, $tag->id);
//            $tagArr[] = $tag->id;
        }
        return $tagArr;
    }

    public function delete(Request $request)
    {
        $data = $request->all();
        $product = Product::where(['store_id' => auth()->user()->store->id, 'id' => $data['id']])->first();
        Storage::delete('products/'.$product['picture']);
        $product->categories()->detach();
        $product->tags()->detach();
        $product->product_specs()->delete();
        $this->deleteProductImages($product);
        try {
            $product->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e], 500);
        }
        return ['msg' => trans('app.save_success')];
    }

    public function deleteProductImages($product)
    {
        foreach ($product->product_images as $image)
            Storage::delete('products/'.$image['image']);
        $product->product_images()->delete();
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
        $image_key = ((int)rand(1000, 100000));
        $image_name = Storage::put("temp/products/{$image_key}", $file);
        return ['image_key' => $image_key, 'image_name' => $image_name];
    }

    public function deleteTempPhoto(Request $request)
    {
        $temp_file = $request->getContent();
        $name = Storage::files("temp/products/$temp_file")[0];
        Storage::deleteDirectory("temp/products/$temp_file");
        return ['id' => $temp_file, 'name' => $name];
    }

    public function addCart(Product $id)
    {
        Cart::instance('shopping')->add($id->id,$id->name,\request()->get('qty'),$id->price);
        return Cart::content();
    }
}
