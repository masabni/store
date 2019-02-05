<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Store extends \Eloquent
{
    protected $fillable = [
        'store_name', 'main_category_id', 'city_id', 'have_store', 'address', 'user_id','rent','monthly_profit','profit','validity'
        ,'rate_point','rate_counter','visible','mac_address'
    ];
}
