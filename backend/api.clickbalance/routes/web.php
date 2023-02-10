<?php

use App\Http\Controllers\usuariosController;
use Illuminate\Support\Facades\Route;

Route::get('/getcliente',[usuariosController::class,'getcliente']);
Route::get('/getclienteId/{id}',[usuariosController::class,'getclienteId']);
Route::patch('/guardarcliente',[usuariosController::class,'guardarcliente']);
Route::put('/actualizacliente/{id}',[usuariosController::class,'actualizacliente']);
Route::delete('/borracliente/{id}',[usuariosController::class,'borracliente']);


