<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends \Eloquent
{
    protected $fillable = [
        'store_id', 'name', 'picture', 'price', 'sale', 'selling_count','description',
    ];

    public function categories()
    {
        return $this->belongsToMany('App\Models\Category','product_categories');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Models\Tag');
    }
}
