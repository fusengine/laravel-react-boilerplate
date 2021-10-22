<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function __invoke()
    {
        return response_json(auth()->user(), 200);
    }
}
