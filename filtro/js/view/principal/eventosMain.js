import * as variables from "./../../variables.js";

export function eventosPagePrincipal() {
    variables.targetAdmin.addEventListener("click", () => location.href = "./html/administrador.html");
    variables.targetFuncionario.addEventListener("click", () => location.href = "./html/funcionario.html");
    variables.targetCliente.addEventListener("click", () => location.href = "./html/cliente.html");
}