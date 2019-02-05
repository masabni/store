<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});
//
//Auth::routes();
//
//Route::get('/home', 'HomeController@index')->name('home');
//// Route to handle page reload in Vue except for api routes
//Route::get('/{any?}', function (){
//    return view('welcome');
//})->where('any', '^(?!api\/)[\/\w\.-]*');

//Route::get('/activate/{token}', ['as' => 'authenticated.activate', 'uses' => 'ActivateController@activate']);
Route::group(
    [
        'prefix' => LaravelLocalization::setLocale(),
        'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath']
    ],
    function () {
        Route::get('/', function () {
            return view('welcome');
        })->name('home');
        // should be here to override the route when coming from email
        // also remove password.reset rout from vendor\laravel\framework\src\Illuminate\Routing\Router.php line 1137
//        Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
        // match all GET or HEAD requests and return the my-app.index.blade.php file
        Route::get('/{view?}', function () {
            return view('welcome');
        })->where('view', '^(?!api\/)[\/\w\.-]*');
    });