<?php
Route::prefix('auth')->group(function () {
    Auth::routes();
    Route::post('validate-user', 'AuthController@validateUser');
    Route::post('validate-store', 'AuthController@validateStore');
//    Route::post('login', 'AuthController@login');
    Route::get('refresh', 'AuthController@refresh');
    Route::get('user', 'AuthController@user');
    Route::post('logout', 'Auth\LoginController@logout');
});

    Route::get('send-sms', 'SmsController@sendSms');
    Route::get('categories', 'HomeController@getCategories');
    Route::get('cities', 'HomeController@getCities');
    Route::get('tags', 'HomeController@getTags');

Route::group(['middleware' => 'auth:api'], function(){
    Route::get('users', 'UserController@index')->middleware('isAdmin');
    Route::get('users/{id}', 'UserController@show')->middleware('isAdminOrSelf');

    // TODO make this routes only for store users
    Route::get('products', 'ProductController@index');
    Route::get('products/{id}', 'ProductController@show');
    Route::post('product_upload_temp', 'ProductController@uploadTempPhoto');
    Route::delete('product_upload_temp', 'ProductController@deleteTempPhoto');
    Route::post('save-product', 'ProductController@create');
    Route::delete('delete-product', 'ProductController@delete');
});
