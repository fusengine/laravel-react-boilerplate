<?php

namespace App\Providers;

use App\Fusengine\repositories\Authentication\AuthRepositoryEloquent;
use App\Fusengine\repositories\Authentication\AuthRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class FusengineRepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {

        /**
         * Authentification  Repository
         */
        $this->app->bind(
            AuthRepositoryInterface::class,
            AuthRepositoryEloquent::class
        );

    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
