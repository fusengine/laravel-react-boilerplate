<?php

namespace App\Fusengine\Facades;

use App\Fusengine\Services\ViteJs\Vite;
use Illuminate\Support\Facades\Facade;

class ViteFacade extends Facade
{
    /**
     * Explique quelle service taper quand on utilise cette facade.
     */
    protected static function getFacadeAccessor()
    {
        return Vite::class;
    }
}
