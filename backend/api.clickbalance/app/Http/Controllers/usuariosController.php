<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuarios;

class usuariosController extends Controller
{
    //obtener datos cliente
    public function getcliente($id){
        $empleado = Usuarios::find($id);
        if(is_null($empleado)){
            return response()->json(['Mensaje'=>'No se encontro el empleado'],404);
        }
        return response()->json($empleado);
    }

    //insertar datos cliente
    public function guardarcliente(Request $request){
        
        $empleado = Usuarios::create($request->all());
        return response()->json($empleado);
    }

    //actualizar datos cliente
    public function actualizacliente(Request $request, $id){
        $empleado = Usuarios::find($id)->update($request->all());
        return response()->json($empleado);
    }

    //borrar datos empleado
    public function borracliente($id){
        $empleado = Usuarios::find($id)->delete();
        return response()->json($empleado);
    }
}
