import * as variables from "./../variables.js";
import { patch } from "../../models/patch.js";
import { get } from "../../models/get.js";
import { lstInfoFecha } from "../login/obtenerFecha.js";
import { data } from "../config.js";
import { crearTarjeta } from "./escribirTarjetas.js";

export async function addTask() {
    const formulario = document.getElementById("formulario");
    const formData = new FormData(formulario);
    const date = lstInfoFecha();
    const url = `${data.url}:${data.puerto}/${data.endpoints.tareas}?id=${localStorage.getItem("id")}`;

    const infoNuevaTarea = 
    {
        "tasks_pendiente": {
            "nombre": formData.get("nombreTarea"),
            "descripcion": formData.get("descripcion"),
            "fecha": formData.get("fecha"),
            "hora": formData.get("tiempo"),
            "prioridad": formData.get("prioridad"),
            "categoria": formData.get("categoria"),
            "metadata": {
                "fecha": date[0],
                "hora": date[1],
                "gmt": date[2],
                "pais": date[3]
            }
        }
    }

    let cantTareas = await get(url);
    console.log(cantTareas);
}

crearTarjeta("pendiente");