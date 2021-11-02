<?php

namespace App\Fusengine\Services\ViteJs\Mode;

class Dev
{
    public function __construct(
        protected string $base
    ) {}

    /**
     * Permet d'enclencher l'assets de dev avec ces url
     *
     * @param string $url des assets
     * @param array $deps dépendance `?a` utilisé ex: ['react]
     *
     * @return string
     */
    public function asset(string $url, array $deps): string
    {
        $script = <<<HTML
        <script type="module" src="{$this->base}/@vite/client"></script>
        HTML;

        if (in_array('react', $deps)) {
            $script .= $this->injectLibReact();
        }

        // définis si on est em développement
        $script .= <<<HTML
        <script type="module" src="{$this->base}{$url}" defer></script>
        HTML;

        return $script;
    }

    /**
     * Permet d'injecter React au script.
     * @return string
     */
    protected function injectLibReact(): string
    {
        return <<<HTML
            <script type="module">
            import RefreshRuntime from "{$this->base}/@react-refresh"
            RefreshRuntime.injectIntoGlobalHook(window)
            window.\$RefreshReg\$ = () => {}
            window.\$RefreshSig\$ = () => (type) => type
            window.__vite_plugin_react_preamble_installed__ = true
            </script>
            HTML;
    }

}
