import { post } from "../../models/post.js";
import { get } from "../../models/get.js";
import { lstInfoFecha } from "./obtenerFecha.js";

export async function agregarCuenta(nombre, correo, pwd, urlUser, urlTask, urlSummary) {
    const infoFecha = lstInfoFecha();
    const numId = await get(urlUser);

    await post(urlUser, {
        "id": numId.length + 1,
        "nombre": nombre,
        "email": correo,
        "password": pwd,
        "metadata": {
            "fecha": infoFecha[0],
            "hora": infoFecha[1],
            "gmt": infoFecha[2],
            "pais": infoFecha[3]
        }
    });

    await post(urlTask, {
        "id": numId.length + 1,
        "tasks_pendiente": {},
        "tasks_curso": {},
        "tasks_completado": {},
    });

    await post(urlSummary, {
        "id": numId.length + 1,
        "cantPendiente": 0,
        "cantCurso": 0,
        "cantCompletado": 0,
        "p1": 0,
        "p2": 0,
        "p3": 0,
        "p4": 0
    })
}