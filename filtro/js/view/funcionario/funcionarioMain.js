// Este archivo se crea con la finalidad de modular y gestionar todos los procesos de la sección "funcionarios" en Linux.
import * as variables from "./../../variables.js";
import { verificarUser } from "./verificarUsuario.js";
import { registrarUsuario } from "./../cliente/registrarUsuario.js";
import { registrarCompra } from "./registrarCompra.js";


variables.btnConsultar.addEventListener("click", () => {
    const formData = new FormData(variables.formulario);

    verificarUser(formData.get("idUser"), "cliente")
        .then(response => {
            // Verifica si el usuario ya está registrado
            if (response) {
                registrarCompra();

            } else if (response === false) {
                registrarUsuario("cliente");
                registrarCompra(id, pass, nombre, tipoUsuarioId);
            }
        })
        .catch(error => console.error(error));
});


// Refresca todos los valores de los inputs a vacío (default)
window.onload = function() {
    const limpiarInputs = [
        variables.inputId,
        variables.nombre,
        variables.id,
        variables.pass
    ]
    limpiarInputs.forEach(input => input.value = "");
}