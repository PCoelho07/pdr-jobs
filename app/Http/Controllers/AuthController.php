<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\User;

class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        $params = $request->all();

        $user = User::where('email', $params['email'])->first();

        if (!$user) {
            return response()->json(['error' => 'User not found'], 400);
        }

        if (!Hash::check($params['password'], $user->password)) {
            return response()->json(['error' => 'Email or password might be wrong'], 400);
        }

        return response()->json([
            'token' => $user->api_token,
            'user' => $user
        ]);
    }

    public function me()
    {
        $user = Auth::user();

        return response()->json(['user' => $user ]);
    }
}
