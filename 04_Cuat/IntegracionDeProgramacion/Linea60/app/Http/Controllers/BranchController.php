<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Branch;

class BranchController extends Controller
{
    function getAll(){
        return Branch::all();
    }

    function getOne($id){
        return Branch::find($id);
    }

    
    function add(Request $req){
         $branch = new Branch;
         $branch->name = $req->name;
         
         $branch->numb_of_cars = 1;
         $branch->numb_of_stops = 1;
         $branch->kilometers =1;
         $branch->time_of_travel = 1;
         $branch->frequency = 1;
         $branch->km_value = 1;
         $branch->starts_at = 1;
         $branch->finish_at = 1;

         $branch->save();
         return "Ok";
     }
     
     function update($id,Request $req){
         $branch = Branch::findOrFail($id);
         $branch->name = $req->name;
         $branch->save();
         return "Ok";
     }
     function delete($id){
        Branch::findOrFail($id)->delete();
     }
    
    
    
    
}
