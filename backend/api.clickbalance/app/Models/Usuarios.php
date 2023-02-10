<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuarios extends Model
{
    use HasFactory;

    protected $table = 'clientes';

    protected $fillable = [
        'rfc',
        'Nombre',
        'ApellidoPaterno',
        'ApellidoMaterno',
        'UsoCFDI',
        'Estatus',
        'RazonSocial',
        'NombreComercial',
        'CodigoPostal',
        'Pais',
        'Estado',
        'Municipio',
        'Colonia',
        'Calle',
        'NoExterior',
        'NombreContacto',
        'Telefono',
        'TelefonoMovil',
        'Correo',
        'Observaciones',
    ];
    
}
