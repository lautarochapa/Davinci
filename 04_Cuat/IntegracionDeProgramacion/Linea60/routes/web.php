<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/stops','StopController@getAll');
Route::get('/branches','BranchController@getAll');

Route::delete('/branches/{id}', 'BranchController@delete');
Route::delete('/stops/{id}','StopController@delete');

Route::post('/branches','BranchController@add');

//aun no implementado
Route::get('/branches/{id}','BranchController@getOne');

Route::get('/stops/branchName/{id}','StopController@getBranchName');



Route::put('/branches/{id}', 'BranchController@update');