import * as variables from "./../variables.js";

function determinarFecha(lstInfoFecha) {

}

export function mostrarFecha() {
    const fecha = new Date();
    const [mes, dia, ano] = [fecha.getMonth(), fecha.getDate(), fecha.getFullYear()];
    const [hora, minutos, segundos] = [fecha.getHours(), fecha.getMinutes(), fecha.getSeconds()];

    variables.hora.textContent = hora;
    variables.minuto.textContent = minutos;
    variables.segundo.textContent = segundos;

    let fechaFormateada = determinarFecha(mes, dia, ano);

    variables.mostrarFecha.textContent = `${fechaFormateada[0]}, ${fechaFormateada[1]} de ${fechaFormateada[2]} del ${fechaFormateada[3]}`;
}