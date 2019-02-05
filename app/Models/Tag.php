<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends \Eloquent
{
    protected $fillable = [
        'name', 'slug', 'approved'
    ];

    public function product()
    {
        return $this->belongsToMany('App\Models\Product');
    }
}
