import * as variables from "./../variables.js";
import { get } from "../../models/get.js";
let isCorrect = false;

export async function existeUsuario(nombre, pwd, url) {
    let infoServer = await get(url);
    console.log(infoServer); // eliminarLuego
    let numIndex = 0;

    if (infoServer.length === 0) {
        alert("Asegúrate de haberte registrado antes de iniciar sesión.")

    } else {
        for (let i = 0; i < infoServer.length; i++) {
            infoServer[i].nombre === nombre && infoServer[i].password === pwd 
                ? (location.href = "./../../html/todo.html", isCorrect = true, numIndex = i)
                : "";
        }
    }

    console.log(isCorrect); // eliminarLuego
    if (isCorrect) {
        localStorage.clear();
        console.log("NUMINDEX", numIndex); // eliminarLuego
        console.log("INFOSERVER", infoServer[numIndex].id);
        localStorage.setItem("id", infoServer[numIndex].id);

    } else {
        alert("Asegúrate de haberte registrado antes de iniciar sesión.");
    }
}