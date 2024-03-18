// funciones de swal (que se llaman) como alerts
import Swal from "sweetalert2";
export {
  confirmBuy,
  forOrder,
  addUnit,
  lessUnit,
  loginresponse,
  errorHandler,
  responseAlert
};

const confirmBuy = () => {
  Swal.fire({
    timer: "2000",
    timerProgressBar: true,
    color: "#dfded6",
    icon: "warning",
    title: "Redireccionaremos a tu proveedor de pago",
    text: "Estaremos preparando tus productos!",
    footer: '<a href=""> no redirecciona nada... pero esta bonito</a>',
    customClass: {
      container: "CustomCssContainter",
      popup: "CustomPopUpCss",
      closeButton: "CustomButtonCss",
      confirmButton: "CustonButtonOnActionCss"
    }
  });
};

const forOrder = () => {
  //66
  Swal.fire({
    position: "top-end",
    toast: true,
    icon: "success",
    title: "añadiste con exito el producto seleccionado",
    showConfirmButton: false,
    timer: 1500,
    color: "#00000",
    customClass: {
      popup: "CustomPopUpCss"
    }
  });
};

const addUnit = () => {
  //copiada y pegada, ajustar
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  });
  Toast.fire({
    title: "añadiste un producto al carro ",
    color: "#00000",
    customClass: {
      popup: "CustomPopUpCss"
    }
  });
};

const lessUnit = () => {
  //copiada y pegada, ajustar
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  });
  Toast.fire({
    title: "Eliministe un producto al carro",
    color: "#00000",
    customClass: {
      popup: "CustomPopUpCss"
    }
  });
};

const loginresponse = () => {
  //copiada y pegada, ajustar
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  });
  Toast.fire({
    title: "Sesion INICIADA",
    color: "#00000",
    customClass: {
      popup: "CustomPopUpCss"
    }
  });
};

const responseAlert = (text) => {
  Swal.fire({ icon: "info", title: "MIRA!!!.", text: `${text}` });
};

const errorHandler = (error) => {
  const warning = error.response.data;

  Swal.fire({ icon: "error", title: "Oops...", text: `${warning.error}` });
};

export const logout = () => {
  Swal.fire("Sesion cerrada!");

}