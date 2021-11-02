<?php

namespace App\Fusengine\Services\ViteJs;

use App\Fusengine\Services\ViteJs\Mode\Dev;
use App\Fusengine\Services\ViteJs\Mode\Prod;
use Psr\SimpleCache\CacheInterface;

/**
 * permet de charger les dossiers assets de vite.
 */
class Vite
{

    /**
     * @param boolean $isDev
     * @param string $manifest
     * @param CacheInterface $cache
     */
    public function __construct(
        private bool $isDev,
        private string $manifest,
        private CacheInterface $cache,
    ) {}

    /**
     * Permet de retourner l'asset en fonction du mode
     *
     * @param string $url de l'asset
     * @param array|null $deps inject le script react ex: ['react']
     * @return string
     */
    public function asset(string $url, ?array $deps = []): string
    {
        $devMode  = new Dev(config('vite.url'));
        $prodMode = new Prod($this->cache, $this->manifest);

        if ($this->isDev) {
            return $devMode->asset($url, $deps);
        }

        return $prodMode->asset($url);
    }

}
