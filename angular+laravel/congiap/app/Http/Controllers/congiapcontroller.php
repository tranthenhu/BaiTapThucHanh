<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\congiap;
class congiapcontroller extends Controller
{
    public function getData()
    {
        $congiaps = congiap::all();
        return $congiaps;
    }

    public function getDataOfID($id)
    {
        $congiap = congiap::find($id);
        return $congiap;
    }

}
