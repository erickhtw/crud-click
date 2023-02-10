<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\empleados;
use PhpParser\Node\Expr\Print_;

class empleadosController extends Controller
{
    //obtener datos del empleado 
    public function getempleados($id){
        $empleado=empleados::find($id);
        if(! $empleado){
            $empleado = [
                'status'=> 'false'
            ];
            return response()->json($empleado);
        }
        return response()->json($empleado);
    }
    //inertar datos 
    public function guardarempleados(Request $request){
        $empleado = empleados::create($request->all());
        return response($empleado, 201);
    }
    public function actualizarempleado(Request $request, $id){
        $empleado = empleados::find($id)->update($request->all());
        return response()->json($empleado);
    }
    // borrar datos 
    public function borrarempleado($id){
        $empleado = empleados::find($id)->delete();
        return response()->json($empleado);
    }
}