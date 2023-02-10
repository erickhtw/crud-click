<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuarios;

class usuariosController extends Controller
{
    //obtener datos cliente
    public function getcliente(){
        $clientes = Usuarios::select(['id','Nombre', 'NombreComercial', 'rfc','Correo', 'Telefono'])->get();
        return response()->json($clientes);
    }

    //obtener datos cliente por id
    public function getclienteId($id){
        $cliente = Usuarios::select(['rfc', 'Nombre', 'ApellidoPaterno', 'ApellidoMaterno', 'UsoCFDI', 'Estatus', 'RazonSocial', 
        'NombreComercial', 'CodigoPostal', 'Pais', 'Estado', 'Municipio', 'Colonia', 'Calle', 'NoExterior', 'NombreContacto', 'Telefono',
        'TelefonoMovil', 'Correo', 'Observaciones'])->where('id',$id)->get();
        return response()->json($cliente);
    }

    //insertar datos cliente
    public function guardarcliente(Request $request){
        $existe = Usuarios::where('rfc',$request->rfc)->first();
        if($existe){
            return response()->json(['Mensaje'=>'El RFC ya existe'],404);
        }
        if($request->input('RazonSocial') == ''){
            $request->merge(['RazonSocial' => 'N/A']);
            $request->merge(['NombreComercial' => 'N/A']);
            $request->merge(['Observaciones' => 'N/A']);
        }
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
