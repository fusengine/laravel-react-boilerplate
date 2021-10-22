<?php

/**
 * Permet de renvoyer une réponse json
 */
if (!function_exists('response_json')) {
    /**
     * Permet de renvoyer une réponse json
     *
     * @param  $data la donnée
     * @param integer $status le status du code
     * @return mixed
     */
    function response_json($data, int $status)
    {
        return response()->json($data, $status);

    }

}
