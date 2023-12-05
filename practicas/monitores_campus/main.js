const cuerpo = document.getElementById("cuerpo");
let cantCampers = parseInt(prompt("¿Cuántos campers hay actualmente?"));
let span, textoSpan;

// Creando la página web mediante JS
const encabezado = document.createElement("header");
const tituloEncabezado = document.createElement("h1");
const textoTituloEncabezado = document.createTextNode("Monitores campus");
const principal = document.createElement("main");

// Dándole atributos a los elementos
encabezado.setAttribute("id", "encabezado");
tituloEncabezado.setAttribute("class", "encabezado_titulo");
principal.setAttribute("id", "principal");

// Insertando los elementos al HTML
cuerpo.appendChild(encabezado);
cuerpo.appendChild(principal);
encabezado.appendChild(tituloEncabezado);
tituloEncabezado.appendChild(textoTituloEncabezado);


// Creando la estructura del programa
console.log("Cantidad de monitores a instalar: " + cantCampers * 2 + " monitores.");

for (i = 0; i < 3; i++) {
    span = document.createElement("p");
    span.classList.add(`texto${i+1}`);
    principal.appendChild(span);
}

let numCampersText = principal.querySelector(".texto1");
let numCompuInstall = principal.querySelector(".texto2");
let numMonitorInstall = principal.querySelector(".texto3");
const nodoTexto_numCampersText = document.createTextNode(`Hay ${cantCampers} campers actualmente.`);
const nodoTexto_numCompuInstall = document.createTextNode(`Se deben instalar ${cantCampers} computadores.`);
const nodoTexto_numMonitorInstall = document.createTextNode(`Se deben instalar ${cantCampers * 2} monitores.`);

principal.appendChild(numCampersText);
principal.appendChild(numCompuInstall);
principal.appendChild(numMonitorInstall);
numCampersText.appendChild(nodoTexto_numCampersText);
numCompuInstall.appendChild(nodoTexto_numCompuInstall);
numMonitorInstall.appendChild(nodoTexto_numMonitorInstall);