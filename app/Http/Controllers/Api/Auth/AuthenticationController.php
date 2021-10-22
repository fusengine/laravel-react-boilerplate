<?php

namespace App\Http\Controllers\Api\Auth;

use App\Fusengine\repositories\Authentication\AuthRepositoryInterface;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Http\Request;

class AuthenticationController extends Controller
{
    public function __construct(protected AuthRepositoryInterface $auth_repository)
    {
        $this->auth_repository = $auth_repository;
    }

    /**
     * Permet de créer un compte utilisateur
     *
     * @param RegisterRequest $request
     * @return mixed
     */
    public function register(RegisterRequest $request)
    {
        return $this->auth_repository
            ->registerUser($request);
    }

    /**
     * Permet a l'utilisateur de ce connecté
     *
     * @param LoginRequest $request
     * @return mixed
     */
    public function login(LoginRequest $request)
    {
        return $this->auth_repository
            ->loginUser($request);
    }

    /**
     * Permet de ce déconnecté
     *
     * @return mixed
     */
    public function logout(Request $request)
    {
        return $this->auth_repository
            ->logoutUser($request);
    }
}
