<?php

namespace App\Providers;

use App\Fusengine\Facades\ViteFacade;
use App\Fusengine\Services\ViteJs\Vite;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class FusengineViteProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register()
    {
        //dd(config('vite.access_manifest'));
        /**
         * Permet de charger vite
         */
        $this->app->singleton(Vite::class, function (Application $app) {
            return new Vite(
                config('vite.dev_mode'),
                public_path(config('vite.access_manifest')),
                $app->get('cache.store')
            );
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot()
    {
        Blade::directive('reactjs', function () {
            return ViteFacade::asset(config('vite.script_uri'), ['react']);
        });

        Blade::directive('vuejs', function () {
            return ViteFacade::asset(config('vite.script_uri'));
        });

    }
}
