import * as variables from "./../variables.js";
import { get } from "../../models/get.js";

export async function existeUsuario(nombre, pwd, url) {
    let infoServer = await get(url);
    
    for (let i = 0; i < infoServer.length; i++) {
        infoServer[i].nombre === nombre && infoServer[i].password === pwd 
            ? location.href = "./../html/todo.html"
            : alert("NO ESTAS REGISTRADO :c");
    }
}