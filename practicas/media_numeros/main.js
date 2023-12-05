const cuerpo = document.getElementById("cuerpo");


// Creando los elementos HTML necesarios
const encabezado = document.createElement("header");
const encabezadoH1 = document.createElement("h1");
const encabezadoTituloText = document.createTextNode("Estructuras condicionales y repetitivas");
const principal = document.createElement("main");
const listaDesordenada = document.createElement("ul");
const pieLista = document.createElement("div");

// Asignandole los atributos necesarios a los elementos recién creados
encabezado.setAttribute("id", "encabezado");
principal.setAttribute("id", "principal");
listaDesordenada.classList.add("lista");
pieLista.classList.add("resultadosNumeros");

// Introduciendo los elementos a sus respectivos contenedores padre
cuerpo.appendChild(encabezado);
encabezado.appendChild(encabezadoH1);
encabezadoH1.appendChild(encabezadoTituloText);
cuerpo.appendChild(principal);
principal.appendChild(listaDesordenada);
principal.appendChild(pieLista);



// Desarrollo del programa solicitado
let numUser = Number(prompt("Ingrese un número positivo (Escribe un negativo para salir): "));
let contador = 0, sumaMedia = 0, numMax = 0;
let numMin = numUser;
let isVerdadero = true;

while (isVerdadero) {
    if (numUser >= 0) {
        sumaMedia += numUser;
        contador++;
        isVerdadero = true;

        if (numUser > numMax) {
            numMax = numUser;
        } else if (numUser < numMin) {
            numMin = numUser;
        }

        listaDesordenada.innerHTML += `
            <li>${numUser}</li>
        `

    } else if (numUser < 0) {
        const cantNumeros = document.createTextNode(`Has ingresado ${contador} números.`);
        const numMaximo = document.createTextNode(`El número máximo ingresado es: ${numMax}.`);
        const numMinimo = document.createTextNode(`El número mínimo ingresado es: ${numMin}.`);
        const resultadoMedia = document.createTextNode(`La media es: ${(sumaMedia / contador).toFixed(2)}.`);

        const arrVariables = [cantNumeros, numMaximo, numMinimo, resultadoMedia];
        console.log("Estoy en el else if!!!");

        for (i = 0; i < 4; i++) {
            const textoElemento = document.createElement("span");
            textoElemento.classList.add(`resultado${i+1}`);
            textoElemento.appendChild(arrVariables[i]);
            pieLista.appendChild(textoElemento);
            console.log(textoElemento);
        }

        isVerdadero = false;
        break;
    } else {
        alert("Error. No puedes ingresar letras u otros dígitos distintos a números. Inténtelo de nuevo.");
    }

    numUser = Number(prompt("Ingrese un número positivo (Escribe un negativo para salir): "));
}

let arrEstilos_pieLista = [
    ["display", "flex"], 
    ["justifyContent", "space-between"],
    ["alignItems", "center"],
    ["flexWrap", "wrap"]
];


arrEstilos_pieLista.forEach((atributos) => {
    pieLista.style[atributos[0]] = atributos[1];
});