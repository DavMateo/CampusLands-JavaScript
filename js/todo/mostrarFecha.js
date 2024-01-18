import * as variables from "./../variables.js";

function determinarFecha(objDate) {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const nombreDiaSemana = diaSemana[objDate.getDay()];
    const nombreMesAno = meses[objDate.getMonth()];

    return [nombreDiaSemana, objDate.getDate(), nombreMesAno, objDate.getFullYear()];
}

export function mostrarFecha() {
    const fecha = new Date();
    const [mes, dia, ano] = [fecha.getMonth(), fecha.getDate(), fecha.getFullYear()];
    const [hora, minutos, segundos] = [fecha.getHours(), fecha.getMinutes(), fecha.getSeconds()];

    variables.hora.textContent = hora < 10 ? `0${hora}` : hora;
    variables.minuto.textContent = minutos < 10 ? `0${minutos}` : minutos;
    variables.segundo.textContent = segundos < 10 ? `0${segundos}` : segundos;

    let fechaFormateada = determinarFecha(fecha);
    variables.mostrarFecha.textContent = `${fechaFormateada[0]}, ${fechaFormateada[1]} de ${fechaFormateada[2]} del ${fechaFormateada[3]}`;
}