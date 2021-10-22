<?php

namespace App\Fusengine\repositories\Authentication;

interface AuthRepositoryInterface
{
    /**
     * Permet de créer un compte utilisateur
     *
     * @param object $request
     * @return void
     */
    public function registerUser(object $request);

    /**
     * Permet de connecté l'utilisateur.
     *
     * @param object $request
     * @return mixed
     */
    public function loginUser(object $request);

    /**
     * Permet de déconnecté l'utilisateur.
     *
     * @param object $request
     * @return void
     */
    public function logoutUser(object $request);
}
