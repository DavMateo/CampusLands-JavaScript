import { get } from "./../models/get.js";
import { post } from "./../models/post.js";
import { put } from "./../models/put.js";
import { delet } from "../models/delete.js";
import { patch } from "../models/patch.js";
import { existeUsuario } from "../js/login/validarCuenta.js";


export function controlador(formulario, evento, entidad, elemFormulario) {
    const URL = "http://localhost:3000/";
    let urlCompleta = "";

    const datos = formulario !== null ? Object.fromEntries(new FormData(formulario)) : null;
    const value = evento.target.value;

    console.log(datos);

    switch (value) {
        case "Iniciar Sesión":
            urlCompleta = `${URL}${entidad}/${datos !== null && datos.id !== undefined ? datos.id : ""}`;
            console.log(urlCompleta);
            existeUsuario(datos.nombre, datos.contrasena, urlCompleta);
    }
}