import * as variables from "./../../variables.js";
import { controlador } from "../../controller/controllers.js";

export async function verificarUser(idUser, solicitud) {
    const tipoSolicitud = solicitud === "funcionario" 
                          ? "&tipousuarioId=2" : solicitud === "cliente" 
                          ? "&tipousuarioId=3" : solicitud === "administrador" 
                          ? "&tipousuarioId=1" : "";
    const solicitudRespuesta = await controlador(`?id=${idUser}${tipoSolicitud}`, "usuarios", "buscar");
    console.log(solicitudRespuesta);
    return solicitudRespuesta.length === 0 ? false : true;
}