var app = new Vue({
  el: "#app",
  data: {
    users: [
      {
        id: 6,
        Nombre: "Frank",
        NombreComercial: "Murphy",
        rfc: "frank.murphy@test.com",
        Correo: "User",
        Telefono: "1234567890",
      },
      {
        id: 2,
        Nombre: "Vic",
        NombreComercial: "Reynolds",
        rfc: "vic.reynolds@test.com",
        Correo: "Admin",
        Telefono: "1234567890",
      },
      {
        id: 3,
        Nombre: "Gina",
        NombreComercial: "Jabowski",
        rfc: "gina.jabowski@test.com",
        Correo: "Admin",
        Telefono: "1234567890",
      },
      {
        id: 4,
        Nombre: "Jessi",
        NombreComercial: "Glaser",
        rfc: "jessi.glaser@test.com",
        Correo: "User",
        Telefono: "1234567890",
      },
    ],
    clientes: [],
    txtNombreEmpleado: "",
    txtRFC: "",
    txtUsoCFDI: "",
    txtApellidoPaterno: "",
    txtApellidoMaterno: "",
    txtEstatus: "",
    txtRazonSocial: "",
    txtNombreComercial: "",
    txtCodigoPostal: "",
    txtPais: "",
    txtEstado: "",
    txtMunicipio: "",
    txtColonia: "",
    txtCalle: "",
    txtNumeroExterior: "",
    txtNombreContacto: "",
    txtTelefono: "",
    txtTelMovil: "",
    txtEmail: "",
    txtObservaciones: "",
    txtTipoPersona: "",
    txtColonia: "",
    IdEmpleado: 0,
    estatusSeleccionado: 0,
    estatusNuevo: 0,
    estatus: [
      {
        value: "0",
        text: "Eliga el estatus",
      },
      {
        value: "Activo",
        text: "Activo",
      },
      {
        value: "Inactivo",
        text: "Inactivo",
      },
      {
        value: "Baja",
        text: "Baja",
      },
    ],
  },
  methods: {
    TipoPersona: function (RFC) {
      if (RFC.length == 12) {
        this.txtTipoPersona = "Fisica";
      } else if (RFC.length == 13) {
        this.txtTipoPersona = "Moral";
      } else {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Aviso",
          text:
            "El RFC: " +
            RFC +
            " No es v??lido, este debe contener 12 d??gitos para persona f??sica y 13 para personas morales. ",
          showConfirmButton: true,
        });
      }
      console.log(this.txtTipoPersona);
    },
    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    getClientes: function () {
      axios
        .get(
          "http://localhost/crud-click/backend/api.clickbalance/public/getcliente/"
        )
        .then(function (response) {
          if (response) {
            clientes = response.data;
            console.log(clientes);
          } else {
            Swal.fire({
              position: "center",
              icon: "info",
              title: "Aviso",
              text:
                "No existen empleados registrados " + this.txtNoEmpleado.value,
              showConfirmButton: true,
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getCliente: function (id) {
      this.IdEmpleado = id;
      axios
        .get(
          "http://localhost/crud-click/backend/api.clickbalance/public/getclienteId/" +
            id
        )
        .then(function (response) {
          if (response) {
            this.txtRFC.value = response.data[0].rfc;
            this.txtNombreEmpleado.value = response.data[0].Nombre;
            this.txtApellidoPaterno.value = response.data[0].ApellidoPaterno;
            this.txtApellidoMaterno.value = response.data[0].ApellidoMaterno;
            this.txtUsoCFDI.value = response.data[0].UsoCFDI;
            this.estatusNuevo.value = response.data[0].Estatus;
            this.txtRazonSocial.value = response.data[0].RazonSocial;
            this.txtNombreComercial.value = response.data[0].NombreComercial;
            this.txtCodigoPostal.value = tresponse.data[0].CodigoPostal;
            this.txtPais.value = response.data[0].Pais;
            this.txtEstado.value = response.data[0].Estado;
            this.txtMunicipio.value = response.data[0].Municipio;
            this.txtColonia.value = response.data[0].Colonia;
            this.txtCalle.value = response.data[0].Calle;
            this.txtNumeroExterior.value = response.data[0].NumeroExterior;
            this.txtNombreContacto.value = response.data[0].NombreContacto;
            this.txtTelefono.value = response.data[0].Telefono;
            this.txtTelMovil.value = response.data[0].TelMovil;
            this.txtEmail.value = response.data[0].Email;
            this.txtObservaciones.value = response.data[0].Observaciones;
          } else {
            Swal.fire({
              position: "center",
              icon: "info",
              title: "Aviso",
              text:
                "No existen empleados registrados " + this.txtNoEmpleado.value,
              showConfirmButton: true,
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    GuardaCliente: function () {
      axios
        .patch(
          "http://localhost/crud-click/backend/api.clickbalance/public/guardarcliente/",
          {
            rfc: this.txtRFC,
            Nombre: this.txtUsoCFDI,
            ApellidoPaterno: this.txtApellidoPaterno,
            ApellidoMaterno: this.txtApellidoMaterno,
            UsoCFDI: this.txtUsoCFDI,
            Estatus: this.estatusSeleccionado,
            RazonSocial: this.txtRazonSocial,
            NombreComercial: this.txtNombreComercial,
            CodigoPostal: this.txtCodigoPostal,
            Pais: this.txtPais,
            Estado: this.txtEstado,
            Municipio: this.txtMunicipio,
            Colonia: this.txtColonia,
            Calle: this.txtCalle,
            NoExterior: this.txtNumeroExterior,
            NombreContacto: this.txtNombreContacto,
            Telefono: this.txtTelefono,
            TelefonoMovil: this.txtTelMovil,
            Correo: this.txtEmail,
            Observaciones: this.txtObservaciones,
          }
        )
        .then(function (response) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Bien hecho!",
            text:
              "Se guard?? correctamente el cliente con n??mero de cliente: " +
              response.data.id,
            showConfirmButton: true,
          });
          this.txtNombreEmpleado = "";
          this.txtApellido = "";
          this.txtPuesto = "";
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    EliminarCliente: function (id) {
      Swal.fire({
        title: "??Desea eliminar al cliente?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "S??",
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(
              "http://localhost/crud-click/backend/api.clickbalance/public/borracliente/" +
                id
            )
            .then(function (response) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Bien hecho!",
                text: "Se elimin?? correctamente el cliente con ID: " + id,
                showConfirmButton: true,
              });
              this.txtNombreEmpleado.value = "";
              this.txtApellido.value = "";
              this.txtPuesto.value = "";
            })
            .catch(function (error) {
              console.log(error);
            });
        } else if (result.isDenied) {
          Swal.fire("No se realiz?? ning??n cambio", "", "info");
        }
      });
    },
    ActualizarCliente: function () {
      axios
        .put(
          "http://localhost/crud-click/backend/api.clickbalance/public/actualizacliente/" +
            this.IdEmpleado,
          {
            Nombre: this.txtNombreEmpleado,
            Apellido: this.txtApellido,
            Puesto: this.txtPuesto,
          }
        )
        .then(function (response) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Bien hecho!",
            text:
              "Se actualiz?? correctamente el cliente con el Id " +
              this.IdEmpleado,
            showConfirmButton: true,
          });
          this.txtNombreEmpleado.value = "";
          this.txtApellido.value = "";
          this.txtPuesto.value = "";
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getClientes();
  },
});
