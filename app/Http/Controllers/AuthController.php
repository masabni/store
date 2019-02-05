<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
class AuthController extends Controller
{

    public function validateUser(Request $request)
    {
        return Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone_number' => 'required|numeric',
            'email' => 'required|string|email|max:255|unique:users',
            'gender' => 'required',
            'birth_date' => 'required',
            'password' => 'required|string|min:6|confirmed',
        ])->validate();
    }
    public function validateStore(Request $request)
    {
        return Validator::make($request->all(), [
            'store_name' => 'required',
            'main_category_id' => 'required',
            'city_id' => 'required',
            'address' => 'required_if:have_store,1|max:500',
        ])->validate();
    }

    public function register(Request $request)
    {
        $v = Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'password'  => 'required|min:3|confirmed',
        ]);

        if ($v->fails())
        {
            return response()->json([
                'error' => 'registration_validation_error',
                'errors' => $v->errors()
            ], 422);
        }

        $user = new User;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return $this->login($request);

//        return response()->json(['status' => 'success'], 200);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if ($token = $this->guard()->attempt($credentials)) {
            return response()->json(['status' => 'success'], 200)->header('Authorization', $token);
        }

        return response()->json(['error' => 'login_error'], 401);
    }

    public function logout()
    {
        $this->guard()->logout();
        return response()->json([
            'status' => 'success',
            'msg' => 'Logged out Successfully.'
        ], 200);
    }

    public function user(Request $request)
    {
//        $user = User::find(Auth::user()->id);

        return response()->json([
            'status' => 'success',
            'data' => Auth::user()
        ]);
    }

    public function refresh(Request $request)
    {
        $auth  = $request->header('Authorization');
        if ($auth) {
            return response()
                ->json(['status' => 'successs'], 200)
                ->header('Authorization', $auth);
        }

        return response()->json(['error' => 'refresh_token_error'], 401);
    }

    private function guard()
    {
        return Auth::guard();
    }
}

