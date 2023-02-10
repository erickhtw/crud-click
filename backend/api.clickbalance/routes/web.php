<?php

use App\Http\Controllers\usuariosController;
use Illuminate\Support\Facades\Route;

Route::get('/getcliente/{id}',[usuariosController::class,'getcliente']);
Route::post('/guardarcliente',[usuariosController::class,'guardarcliente']);
Route::put('/actualizacliente/{id}',[usuariosController::class,'actualizacliente']);
Route::delete('/borracliente/{id}',[usuariosController::class,'borracliente']);


