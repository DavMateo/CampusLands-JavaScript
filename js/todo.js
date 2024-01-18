import { eventosEscucha } from "./todo/eventListeners.js";
import * as variables from "./variables.js";

eventosEscucha();
//getInfoForm();


window.onload = function() {
    variables.agregarTarea.classList.add("oculto");
    variables.lstTarjetasEstado.forEach(tarjeta => tarjeta.classList.add("oculto"));
}