<?php

namespace App\Fusengine\Services\ViteJs\Mode;

class Prod
{
    /**
     * Récupère le tableau de manifest
     *
     * @var array|null
     */
    private $manifestData = [];

    public function __construct(private $cache, private $manifest)
    {}

    /**
     * Permet d'accéder au aux fichier compilé ainsi que son manifest.
     *
     * @param string $url de l'asset du script
     * @return string
     */
    public function asset(string $url): string
    {
        $assets = config('vite.assets');

        $this->manifestStorage();

        //$manifest = json_decode(file_get_contents($this->manifest), true);
        $urlTrim  = trim($url, '/');
        $file     = $this->manifestData[$urlTrim]['file'] ?: null;
        $cssFiles = $this->manifestData[$urlTrim]['css'] ?: [];

        if (null === $file) {
            return '';
        }

        $html = <<<HTML
        <script src="{$assets}/{$file}" type="module" defer></script>
        HTML;

        // inject à la volé les css
        foreach ($cssFiles as $css) {
            $html .= <<<HTML
                <link rel="stylesheet" href="{$assets}/{$css}" media="screen"/>
            HTML;
        }

        return $html;
    }

    /**
     * Permet de sauvegarder les donnés du manifest pour éviter qu'il ne
     * recharge le script a chaque chargement et le garde en mémoire.
     *
     * @return array
     */
    protected function manifestStorage(): array
    {

        if (!$this->manifestData) {
            $manifestName = config('vite.manifest_name');

            $getManifest = $this->cache->get($manifestName, null);
            // si on a pas de cache on le stocke
            if ($getManifest === null) {
                $getManifest = json_decode(file_get_contents($this->manifest), true);
                $this->cache->set($manifestName, $getManifest);
            }

            // enregistre définitivement en cache
            return $this->manifestData = $getManifest;
        }

        return $this->manifestData;
    }
}
