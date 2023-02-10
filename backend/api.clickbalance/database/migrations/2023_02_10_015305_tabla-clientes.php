<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('clientes', function (Blueprint $table) {
            $table->id(); //id autoincremental
            $table->string('rfc');
            $table->string('Nombre', 50);
            $table->string('ApellidoPaterno', 50);
            $table->string('ApellidoMaterno', 50);
            $table->string('UsoCFDI', 50);
            $table->string('Estatus', 20);
            $table->string('RazonSocial', 50);
            $table->string('NombreComercial', 50);
            $table->string('CodigoPostal', 10);
            $table->string('Pais', 30);
            $table->string('Estado', 30);
            $table->string('Municipio', 30);
            $table->string('Colonia', 30);
            $table->string('Calle', 30);
            $table->string('NoExterior', 10);
            $table->string('NombreContacto', 50);
            $table->string('Telefono', 20);
            $table->string('TelefonoMovil', 20);
            $table->string('Correo', 50);
            $table->string('Observaciones', 450);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
