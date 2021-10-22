<?php

namespace App\Fusengine\repositories\Authentication;

use App\Fusengine\repositories\Authentication\AuthRepositoryInterface;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum;

class AuthRepositoryEloquent implements AuthRepositoryInterface
{
    /**
     * Initialisation du modèle
     *
     * @param User $user
     */
    public function __construct(
        protected User $user_model,
    ) {
        $this->user_model = $user_model;
    }

    /**
     * Permet de créer un compte utilisateur
     *
     * @param object $request
     * @return object
     */
    public function registerUser(object $request)
    {
        $this->user_model->create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // $createToken = $user
        //     ->createToken("Token Register $user->name")
        //     ->plainTextToken;

        // return response()->json([
        //     'token'         => $createToken,
        //     'Authorization' => 'Bearer',
        // ], 200);
    }

    /**
     * Permet de connecté l'utilisateur.
     *
     * @param object $request
     * @return mixed
     */
    public function loginUser(object $request)
    {
        if (!Auth::attempt($request->only(['email', 'password']))) {
            return response_json([
                "message" => "Vos données sont invalide.",
                'errors'  => [
                    'email'    => ['Adresse email est invalide.'],
                    'password' => ['Mot de passe erroné.'],
                ],
            ], 422);
        }

        $token = Auth::user()
            ->createToken('Token ' . Auth::user()->name)
            ->plainTextToken;

        return response_json([
            'token_access' => $token,
            'token_type'   => "Bearer",
        ], 200);
    }

    /**
     * Permet de déconnecté l'utilisateur.
     *
     * @param object $request
     * @return void
     */
    public function logoutUser(object $request)
    {
        Auth::guard('web')->logout();

        if ($token = $request->bearerToken()) {
            $model       = Sanctum::$personalAccessTokenModel;
            $accessToken = $model::findToken($token);
            $accessToken->delete();
        }

        return response_json([
            'message' => 'Vous êtes déconnecté.',
        ], 200);
    }
}
