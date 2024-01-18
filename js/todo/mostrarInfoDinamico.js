import * as variables from "./../variables.js";
import { get } from "./../../models/get.js";
import { data } from "./../config.js";

export async function escribirInfoUsuario() {
    let idUserLogin = localStorage.getItem("id");
    let nombreUsuario = await get(`${data.url}:${data.puerto}/${data.endpoints.usuarios}?id=${idUserLogin}`);
    let canTask = await get(`${data.url}:${data.puerto}/${data.endpoints.tareas}?recuento`);
    let sumaTareasTotal = canTask[0].recuento.cantPendiente + canTask[0].recuento.cantCurso + canTask[0].recuento.cantCompletado;

    variables.nombreUsuario.textContent = `¡Bienvenido ${nombreUsuario[0].nombre}!`;
    variables.cantTareas.textContent = sumaTareasTotal === 0 ? "¡No tienes tareas! Disfruta tu tiempo libre" : `Tienes ${sumaTareasTotal} tareas pendientes para hoy`;
}