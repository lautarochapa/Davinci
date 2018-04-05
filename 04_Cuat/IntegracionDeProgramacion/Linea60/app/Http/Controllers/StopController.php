<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Stop;


class StopController extends Controller
{
    function getAll(){
        return Stop::all();
    }

    function getBranchName($id){
        $stop = Stop::findOrFail($id);

        return $stop->branch->name;
    }
    function delete($id){
        Branch::findOrFail($id)->delete();
     }
}
