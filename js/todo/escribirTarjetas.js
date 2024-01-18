import { get } from "../../models/get.js";
import { data } from "../config.js";

export async function crearTarjeta(accion) {
    const resumen = document.getElementById("resumen");
    let url_base = `${data.url}:${data.puerto}/${data.endpoints.tareas}`;


    if (accion === "pendiente") {
        const tareasPendientes = await get(`${url_base}`);

    } else if (accion === "curso") {


    } else if (accion === "completado") {


    } else {
        console.error("Ha ocurrido un error al renderizar las tarjetas. Inténtelo de nuevo.");
    }
}