<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductSpecs extends Model
{
    protected $fillable = [
        'product_id', 'size', 'color', 'package_quantity', 'material', 'quantity', 'price', 'picture'
    ];

    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }
}
