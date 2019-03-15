<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends \Eloquent
{
    protected $fillable = [
        'store_id', 'name', 'picture', 'price', 'sale', 'total_quantity', 'description', 'long_description', 'variation'
    ];

    public function categories()
    {
        return $this->belongsToMany('App\Models\Category','product_categories');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Models\Tag');
    }

    public function product_specs()
    {
        return $this->hasMany('App\Models\ProductSpecs');
    }

    public function product_images()
    {
        return $this->hasMany('App\Models\ProductImages');
    }
}
