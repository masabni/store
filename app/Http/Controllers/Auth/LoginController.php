<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Laravel\Passport\Client as PassClient;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Login username to be used by the controller.
     *
     * @var string
     */
    protected $username;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->username = $this->findUsername();
    }

    public function login(Request $request, Client $client)
    {
        $this->validateLogin($request);

        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        $this->clearLoginAttempts($request);
        /** @var \Laravel\Passport\Client $proxy */
//        $proxy = app('proxy.grant.client');
        $pass_client = PassClient::where('password_client', 1)->first();

//        $response = $client->post(config('app.url') . '/oauth/token', [
//            'form_params' => [
//                'client_id' => $pass_client->id,
//                'client_secret' => $pass_client->secret,
//                'grant_type' => 'password',
//                'username' => $request->email,
//                'password' => $request->password,
//                'scopes' => '[*]'
//            ]
//        ]);
        $request->request->add([
            'grant_type' => 'password',
            'client_id' => $pass_client->id,
            'client_secret' => $pass_client->secret,
            'username' => $request->all()['email'],
            'password' => $request->all()['password'],
            'scope' => null,
        ]);

        // Fire off the internal request.
        $token = Request::create(
            'oauth/token',
            'POST'
        );

        $response =  \Route::dispatch($token);

//        dd($response->getStatusCode());
        $contents = $response->getContent();
        $json_contents = json_decode($contents);
        if ($response->getStatusCode() === 200) {
            $this->clearLoginAttempts($request);

            return response()->json($json_contents, $response->getStatusCode())->header('Authorization', $contents);
        }

        $this->incrementLoginAttempts($request);

        return response()->json($json_contents, $response->getStatusCode())->header('Authorization', $contents);
    }
    /**
     * Get the login username to be used by the controller.
     *
     * @return string
     */
    public function findUsername()
    {
        $login = request()->input('email');

        $fieldType = 'email';

        if($login)
            $fieldType = filter_var($login, FILTER_VALIDATE_EMAIL)? $fieldType : 'phone_number';

        request()->merge([$fieldType => $login]);

        return $fieldType;
    }

    /**
     * Get username property.
     *
     * @return string
     */
    public function username()
    {
        return $this->username;
    }
    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        $request->user()->token()->delete();
    }
}
