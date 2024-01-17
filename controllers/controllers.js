import { get } from "./../models/get.js";
import { post } from "./../models/post.js";
import { put } from "./../models/put.js";
import { delet } from "../models/delete.js";
import { patch } from "../models/patch.js";

export function controlador(formulario, evento, entidad, elemFormulario) {
    const URL = "http://localhost:3000/";
    let urlCompleta = "";

    const datos = formulario !== null ? Object.fromEntries(new FormData(formulario)) : null;
    const valor = evento.target.value;
}