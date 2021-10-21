<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum;

class AuthenticationController extends Controller
{
    /**
     * Permet de créer un compte utilisateur
     *
     * @param RegisterRequest $request
     * @return mixed
     */
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        //$request->session()->regenerate();
        $createToken = $user->createToken("Token Register $user->name")->plainTextToken;

        return response()->json([
            'token'         => $createToken,
            'Authorization' => 'Bearer',
        ], 200);
    }

    /**
     * Permet a l'utilisateur de ce connecté
     *
     * @param LoginRequest $request
     * @return mixed
     */
    public function login(LoginRequest $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {

            $request->session()->regenerate();

            return response()->json([
                'errors' => [
                    'email'    => ['Email is invalid'],
                    'password' => ['Password is wrong'],
                ],
            ], 422);
        }

        $token = auth()
            ->user()
            ->createToken("Token Generate by " . Auth::user()->name)
            ->plainTextToken;

        return response()->json([
            'token_access' => $token,
            'token_type'   => "Bearer",
        ], 200);

    }

    /**
     * Permet de ce déconnecté
     *
     * @return mixed
     */
    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        if ($token = $request->bearerToken()) {
            $model       = Sanctum::$personalAccessTokenModel;
            $accessToken = $model::findToken($token);
            $accessToken->delete();
        }

        return response()->json([
            'message' => 'You are logout'], 200);

    }
}
