<?php

return [
    /*
    |----------------------------------------------------------------------
    | Assets
    | ---------------------------------------------------------------------
    | Définie ou sont stocké les fichiers javascript et js
    |
     */
    'assets'          => '/assets',

    /*
    |----------------------------------------------------------------------
    | Dev mode par défaut true
    | ---------------------------------------------------------------------
    | Permet de finir le mode de développement
    | si il est a true il chargera vite sur le port 3000
    | à false il chargera le fichier assets compilé.
    |
     */
    'dev_mode'        => env('VITE_DEV', true),

    /*
    |----------------------------------------------------------------------
    | Vite url
    | ---------------------------------------------------------------------
    | Le lien de vite quand on utilise yarn dev
    |
     */
    'url'             => env('VITE_URL', 'http://localhost:3000/assets'),

    /*
    |----------------------------------------------------------------------
    | url du script
    | ---------------------------------------------------------------------
    | Permet de récupérer le l'url du script qui permettra d'accéder
    | au framework javascript de votre choix
    |
     */
    'script_uri'      => '/js/app.js',

    /*
    |----------------------------------------------------------------------
    | Accès au manifest
    | ---------------------------------------------------------------------
    | Définie le chemin d'accès au manifest.
    |
     */
    'access_manifest' => 'assets/manifest.json',

    /*
    |----------------------------------------------------------------------
    | Manifest
    | ---------------------------------------------------------------------
    | Permet de donner un nom au manifest pour stocker celui-ci.
    |
     */
    'manifest_name'   => 'vite_manifest',
];
