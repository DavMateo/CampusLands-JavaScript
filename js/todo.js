import { eventosEscucha } from "./todo/eventListeners.js";
import * as variables from "./variables.js";
import { escribirInfoUsuario } from "./todo/mostrarInfoDinamico.js";
import { mostrarFecha } from "./todo/mostrarFecha.js";

eventosEscucha();
//getInfoForm();
escribirInfoUsuario();

setInterval(() => mostrarFecha(), 500);


window.onload = function() {
    variables.agregarTarea.classList.add("oculto");
    variables.lstTarjetasEstado.forEach(tarjeta => tarjeta.classList.add("oculto"));
}