<?php

namespace App\Fusengine\models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ControllerModel extends Model
{
    use HasFactory;

    /**
     * Permet l'écriture des données en database
     *
     * @var array
     */
    protected $guarded = [];
}
