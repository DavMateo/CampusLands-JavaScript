const infoFecha = new Date().toString();
const separarFecha = infoFecha.split(" ");
let fecha, hora, gmt, pais, lstFecha = [];

for (let i = 0; i < separarFecha.length; i++) {
    i < 4 ? lstFecha.push(separarFecha[i]) :
    i >= 4 && i < 5 ? hora = separarFecha[i] :
    i >= 5 && i < 6 ? gmt = separarFecha[i] :
    i >= 6 && i < 7 ? pais = separarFecha[i].match(/[A-Za-z]/g).join("") : "";
}
fecha = lstFecha.join("-");


export function lstInfoFecha() {
    return [fecha, hora, gmt, pais];
}