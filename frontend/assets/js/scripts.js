const { createApp } = Vue;

createApp({
  data() {
    return {
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
      data: [],
      estatusSeleccionado: 0,
      estatus: [
        {
          value: "0",
          text: "Eliga el estatus",
        },
        {
          value: "1",
          text: "Activo",
        },
        {
          value: "2",
          text: "Inactivo",
        },
        {
          value: "3",
          text: "Baja",
        },
      ],
      inventarioSelect: 0,
      inventarioOptions: [
        {
          value: "0",
          text: "Tipo de movimiento",
        },
        {
          value: "1",
          text: "Consulta",
        },
      ],
    };
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
            "El RFC: " + RFC + " No es válido, este debe contener 12 dígitos para persona física y 13 para personas morales. ",
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
    // buscarEmpleado: function () {
    //   axios
    //     .get(
    //       "http://localhost/abcuas/backend/api.uas/public/empleado/" +
    //         this.txtempleado
    //     )
    //     .then(function (response) {
    //       if (response.data.status == "null") {
    //         Swal.fire({
    //           position: "center",
    //           icon: "info",
    //           title: "Aviso",
    //           text:
    //             "No existe el empleado con número de empleado " +
    //             this.txtNoEmpleado.value,
    //           showConfirmButton: true,
    //         });
    //       } else {
    //         // manejar respuesta exitosa
    //         this.txtNombre.value = response.data[0].Nombre + " " + response.data[0].Apellido;
    //         this.txtNombreEmpleado.value = response.data[0].Nombre;
    //         this.txtApellido.value = response.data[0].Apellido;
    //         this.txtPuesto.value = response.data[0].Puesto;
    //       }
    //     })
    //     .catch(function (error) {
    //       // manejar error
    //     });
    // },
    GuardarEmpleado: function () {
      axios
        .patch(
          "http://localhost/crud/backend/api.coppel/public/patchempleado/",
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
              "Se guardó correctamente el empleado con número de empleado: " +
              response.data.id,
            showConfirmButton: true,
          });
          this.txtNombreEmpleado = "";
          this.txtApellido = "";
          this.txtPuesto = "";
        })
        .catch(function (error) {});
    },
    // EliminarEmpleado: function () {
    //   Swal.fire({
    //     title: "¿Desea eliminar el empleado?",
    //     showDenyButton: true,
    //     showCancelButton: false,
    //     confirmButtonText: "Sí",
    //     denyButtonText: `No`,
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       axios
    //         .delete(
    //           "http://localhost/crud/backend/api.coppel/public/deleteempleado/" +
    //             this.txtNoEmpleado
    //         )
    //         .then(function (response) {
    //           Swal.fire({
    //             position: "center",
    //             icon: "success",
    //             title: "Bien hecho!",
    //             text:
    //               "Se eliminó correctamente el empleado con número de empleado: " +
    //               this.txtNoEmpleado.value,
    //             showConfirmButton: true,
    //           });
    //           this.txtNombreEmpleado.value = "";
    //           this.txtApellido.value = "";
    //           this.txtPuesto.value = "";
    //         })
    //         .catch(function (error) {
    //           console.log(error);
    //         });
    //     } else if (result.isDenied) {
    //       Swal.fire("No se realizó ningún cambio", "", "info");
    //     }
    //   });
    // },
    // ModificarEmpleado: function () {
    //   axios
    //     .put(
    //       "http://localhost/crud/backend/api.coppel/public/putempleado/" +
    //         this.txtNoEmpleado,
    //       {
    //         Nombre: this.txtNombreEmpleado,
    //         Apellido: this.txtApellido,
    //         Puesto: this.txtPuesto,
    //       }
    //     )
    //     .then(function (response) {
    //       Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "Bien hecho!",
    //         text:
    //           "Se actualizó correctamente el empleado con número de empleado: " +
    //           this.txtNoEmpleado.value,
    //         showConfirmButton: true,
    //       });
    //       this.txtNombreEmpleado.value = "";
    //       this.txtApellido.value = "";
    //       this.txtPuesto.value = "";
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
    // buscarPoliza: function () {
    //   axios
    //     .get(
    //       "http://localhost/crud/backend/api.coppel/public/getpoliza/" +
    //         this.txtPoliza
    //     )
    //     .then(function (response) {
    //       if (response.data.status == "null") {
    //         Swal.fire({
    //           icon: "info",
    //           title: "Aviso",
    //           text: "La poliza ingresada no existe.",
    //         });
    //       } else {
    //         this.txtEmpleadoRegistro.value = response.data[0].EmpleadoGenero;
    //         this.txtSKU.value = response.data[0].SKU;
    //         this.txtProducto.value = response.data[0].NombreProducto;
    //         this.txtCantidad.value = response.data[0].Cantidad;
    //       }
    //     })
    //     .catch(function (error) {
    //       // manejar error
    //     });
    // },
    // GuardarPoliza: function () {
    //   var Empleado = document.getElementById("txtNombre");
    //   axios
    //     .patch("http://localhost/crud/backend/api.coppel/public/patchpoliza/", {
    //       EmpleadoGenero: Empleado.value,
    //       SKU: this.txtSKU,
    //       NombreProducto: this.txtProducto,
    //       Cantidad: this.txtCantidad,
    //     })
    //     .then(function (response) {
    //       Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "Bien hecho!",
    //         text:
    //           "Se guardó correctamente la poliza con número: " +
    //           response.data.id,
    //         showConfirmButton: true,
    //       });
    //       this.txtNombreEmpleado = "";
    //       this.txtApellido = "";
    //       this.txtPuesto = "";
    //     })
    //     .catch(function (error) {});
    // },
    // EliminarPoliza: function () {
    //   Swal.fire({
    //     title: "¿Desea eliminar la poliza?",
    //     showDenyButton: true,
    //     showCancelButton: false,
    //     confirmButtonText: "Sí",
    //     denyButtonText: `No`,
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       axios
    //         .delete(
    //           "http://localhost/crud/backend/api.coppel/public/deletepoliza/" +
    //             this.txtPoliza
    //         )
    //         .then(function (response) {
    //           Swal.fire({
    //             position: "center",
    //             icon: "success",
    //             title: "Bien hecho!",
    //             text:
    //               "Se eliminó correctamente la poliza con número: " +
    //               this.txtPoliza.value,
    //             showConfirmButton: true,
    //           });
    //           this.txtProducto.value = "";
    //           this.txtSKU.value = "";
    //           this.txtCantidad.value = "";
    //           this.txtEmpleadoRegistro.value = "";
    //         })
    //         .catch(function (error) {
    //           console.log(error);
    //         });
    //     } else if (result.isDenied) {
    //       Swal.fire("No se realizó ningún cambio", "", "info");
    //     }
    //   });
    // },
    // ModificarPoliza: function () {
    //   axios
    //     .put(
    //       "http://localhost/crud/backend/api.coppel/public/putpoliza/" +
    //         this.txtPoliza,
    //       {
    //         SKU: this.txtSKU,
    //         NombreProducto: this.txtProducto,
    //         Cantidad: this.txtCantidad,
    //       }
    //     )
    //     .then(function (response) {
    //       Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "Bien hecho!",
    //         text:
    //           "Se actualizó correctamente la poliza con número: " +
    //           this.txtNoEmpleado.value,
    //         showConfirmButton: true,
    //       });
    //     })
    //     .catch(function (error) {});
    // },
  },
}).mount("#app");
