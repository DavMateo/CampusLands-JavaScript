function construirTarjeta(lstInfo) {
    const lstInfoResultado = ["Número de enlaces", "Dirección del penúltimo enlace", "Número de enlaces 'http://prueba'", "Número de enlaces párrafo tres"];
    const contenedorInfo = document.querySelector(".contenedor_resultados");

    for (let i = 0; i < lstInfoResultado.length; i++) {
        const parrafoInfo = document.createElement("p");
        const nodoTexto = document.createTextNode(`${lstInfoResultado[i]}: ${lstInfo[i]}`);

        parrafoInfo.appendChild(nodoTexto);
        contenedorInfo.appendChild(parrafoInfo);
    }
}

function iniciarAnalisis() {
    const body = document.querySelector("body");
    const links = body.querySelectorAll("a");
    const parrafos = document.querySelectorAll("p");

    // Numero de enlaces de la pagina
    let numLiks = links.length;

    // Direccion del penultimo enlace
    let penultimo = links[links.length - 2].href;

    // Numero de enlaces que apuntan a http://prueba
    let numEnlacesPrueba = 0;
    links.forEach((link) => {
        if (link.href === "http://prueba/") {
            numEnlacesPrueba++;
        }
    });

    // Numero de enlaces del tercer párrafo
    const tercerParrafo = parrafos[2];
    const numLikParrafo3 = tercerParrafo.querySelectorAll("a").length;


    // Llamar a la función que construirá la tarjeta de información
    construirTarjeta([numLiks, penultimo, numEnlacesPrueba, numLikParrafo3]);
}


// Ejecutar el siguiente código al cargar el documento HTML
window.onload = function() {
    const btnResultados = document.getElementById("btnResultados");
    const contenedor = document.querySelector(".contenedor");
    
    btnResultados.addEventListener("click", (e) => {
        iniciarAnalisis();
        contenedor.removeAttribute("style");
    });
}