import * as variables from "./../../variables.js";
import { controlador } from "../../controller/controllers.js";

let lstVarStyle = [variables.formularioRegistro, variables.formulario, variables.btnConsultar];
export let identificacion, pass, nombre, tipoUser;

export function registrarUsuario(tipoUsuario) {
    lstVarStyle.forEach((tag) => {
        tag.style.display = "none";
    });
    variables.formularioRegistro.style.display = "block";

    variables.registrarse.addEventListener("click", () => {
        const formData = new FormData(variables.formularioRegistro);
        console.log(formData);
        
        identificacion = formData.get("id"),
        pass = formData.get("pass"),
        nombre = formData.get("nombre"),
        tipoUser = tipoUsuario === "administrador" 
                   ? "1" : tipoUsuario === "funcionario"
                   ? "2" : tipoUsuario === "cliente"
                   ? "3" : "";
        
        const jsonUserClient = {
            "id": identificacion,
            "pass": pass,
            "nombre": nombre,
            "tipousuarioId": tipoUser
        };
        
        controlador("", "usuarios", "agregar", jsonUserClient);
    });
}