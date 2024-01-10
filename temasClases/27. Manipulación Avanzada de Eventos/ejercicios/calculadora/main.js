// Definiendo las variables globales necesarias
const calculadora = document.getElementById("calculadora");
const escribirRespuesta = document.getElementById("respuesta");
const btnOperaciones = document.getElementById("operaciones").querySelector("td").querySelectorAll("button");
const padNumerico = document.getElementById("padNumerico").querySelectorAll("button");
const btnIgual = document.getElementById("btnIgual");


// Definiendo los eventos de escucha necesarios
btnOperaciones.forEach((btnOperacion) => {
    btnOperacion.addEventListener("click", (e) => {
        console.log(e.target.dataset.operador);
    });
});

padNumerico.forEach((btnNum) => {
    btnNum.addEventListener("click", (e) => {
        console.log(e.target.dataset.numero);
    });
});

btnIgual.addEventListener("click", (e) => {
    console.log(e);
});



// Definiendo las funciones de validación
function validarOperacion(num1 = 0, num2 = 0, type) {
    
}


// Definiendo las funciones complementarias
function miFuncion() {

}


// Definiendo las funciones principales
function usarCalculadora() {
    
}