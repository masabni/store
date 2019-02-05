<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:255',
            'price' => 'required|numeric',
            'categories' => 'required',
            'description' => 'required',
//            'birth_location' => 'required|exists:gen_cities,id',
//            'picture' => 'required|mimes:jpg,png,jpeg|max:5000',
            'picture_id'=>(request('picture') == '')?'required':'',
        ];
    }
}
