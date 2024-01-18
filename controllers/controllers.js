import { existeUsuario } from "../js/login/validarCuenta.js";
import { agregarCuenta } from "./../js/login/agregarCuenta.js";
import { patch } from "../models/patch.js";
import { data } from "../js/config.js";


export function controlador(formulario, evento) {
    let urlCompleta = "";
    let urlCompletaUser = "";
    let urlCompletaTask = "";
    let urlCompletaSummary = "";
    const datos = formulario !== null ? Object.fromEntries(new FormData(formulario)) : null;
    const value = evento.target.value;

    console.log(datos); // eliminarLuego

    switch (value) {
        case "Iniciar Sesión":
            urlCompleta = `${data.url}:${data.puerto}/${data.endpoints.usuarios}/${datos !== null && datos.id !== undefined ? datos.id : ""}`;
            existeUsuario(datos.nombre, datos.contrasena, urlCompleta);
            break;
        
        case "Registrarse":
            urlCompletaUser = `${data.url}:${data.puerto}/${data.endpoints.usuarios}`;
            urlCompletaTask = `${data.url}:${data.puerto}/${data.endpoints.tareas}`;
            urlCompletaSummary = `${data.url}:${data.puerto}/${data.endpoints.recuento}`;
            agregarCuenta(datos.nombreRegistro, datos.emailRegistro, datos.contrasenaRegistro, urlCompletaUser, urlCompletaTask, urlCompletaSummary);
            formulario.reset;
            break;
    }
}