<?php

namespace App;

use App\Models\Store;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
     use HasApiTokens,Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password', 'phone_number', 'type', 'image', 'email_verified', 'mobile_verified', 'mac_address', 'coins', 'avatar'
    ];

    protected $appends = ['full_name'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function store()
    {
        return self::hasOne(Store::class);
    }
//    public function social_accounts()
//    {
//        return self::hasMany(Provider::class, 'user_id', 'id');
//    }

    public function getFullNameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    public function findForPassport($identifier) {
        return $this->orWhere('email', $identifier)->orWhere('phone_number', $identifier)->first();
    }

    public function getAvatarAttribute($avatar)
    {
        return isset($avatar)?$avatar:asset('images/icons/avatar.jpg');
    }

}
