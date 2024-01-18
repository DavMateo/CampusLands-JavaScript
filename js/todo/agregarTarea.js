import * as variables from "./../variables.js";
import { controlador } from "../../controllers/controllers.js";
export let infoNuevaTarea;

export const addTask = () => {
    const formulario = document.getElementById("formulario");
    const formData = new FormData(formulario);

    infoNuevaTarea = {
        nombre: formData.get("nombreTarea"),
        descripcion: formData.get("descripcion"),
        fecha: formData.get("fecha"),
        hora: formData.get("tiempo"),
        prioridad: formData.get("prioridad"),
        categoria: formData.get("categoria")
    }

    variables.btnAgregarTarea.addEventListener("click", (e) => controlador(formulario, e));
}