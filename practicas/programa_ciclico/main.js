import {jsonEstilosCss} from "./jsonEstilos.js";

// Definiendo las variables globales necesarias
let suma = 0;
let lstSumaNum = [];
let media = 0;
let mediana = 0;
let moda = new Map();

// Definiendo las funciones de validación
function validarNumero(num) {
    if (isNaN(num) && num.length > 0) {
        alert("Error. No puedes ingresar una cadena de texto. Inténtalo de nuevo.");
        return false;

    } else if (num === "") {
        return 0;
        
    } else if (Number(num) >= 0 && !isNaN(num)) {
        return Number(num);

    } else if (Number(num) < 0) {
        return true;

    } else {
        alert("Ha ocurrido un error inesperado. Inténtelo de nuevo más tarde o comuníquese con un administrador.");
    }
}



function construirMetadata(metadata) {
    const css = document.createElement("style");
    const llavesObjeto = Object.keys(jsonEstilosCss);
    const longitudObjeto = Object.keys(jsonEstilosCss).length;
    metadata.appendChild(css);

    for (let i = 0; i < longitudObjeto; i++) {
        const propiedadValorCSS = document.createTextNode(`${llavesObjeto[i]}{${jsonEstilosCss[llavesObjeto[i]].join(";")}}`);
        css.appendChild(propiedadValorCSS);
    }
}

function construirEncabezado(cuerpo) {
    const encabezado = document.createElement("header");
    const tituloEncabezado = document.createElement("h1");

    // Creando los nodos de texto necesarios
    const textoTituloEncabezado = document.createTextNode("Programa Cíclico");

    // Agregando los atributos necesarios
    encabezado.setAttribute("id", "encabezado");

    // Anexando elementos a etiquetas padre
    cuerpo.appendChild(encabezado);
    encabezado.appendChild(tituloEncabezado);
    tituloEncabezado.appendChild(textoTituloEncabezado);
}

function construirPrincipal(cuerpo) {
    const principal = document.createElement("main");
    const subtitulo1 = document.createElement("h2");
    const subtitulo2 = document.createElement("h2");
    const sectionInfo = document.createElement("section");
    const sectionResult = document.createElement("section");
    const sectionInfoParrafo = document.createElement("p");
    //Construyendo el formulario
    const formulario = document.createElement("form");
    const labelEntradaNumero = document.createElement("label");
    const entradaNumero = document.createElement("input");
    const btnEnviar = document.createElement("button");
    const articuloAgregarInfo = document.createElement("article");
    const articuloMostrarTabla = document.createElement("article");
    const asideTarjetaInfo = document.createElement("aside");
    const tarjetaInfo = document.createElement("div");

    // Creando los nodos de texto necesarios
    const textoSubtitulo1 = document.createTextNode("Información");
    const textoSubtitulo2 = document.createTextNode("Salida");
    const textoInfoSection = document.createTextNode("Este programa le pide al usuario números positivos hasta que ingrese un número negativo. Una vez ingresado el número negativo, el programa calculará la media de los números positivos introducidos, todo ello en una lista no ordenada.");
    //Construyendo el formulario
    const textoLabelEntradaNumero = document.createTextNode("Ingrese un número positivo: ");
    const textoBtnEnviar = document.createTextNode("Enviar");

    // Agregando los atributos necesarios
    principal.setAttribute("id", "principal");
    sectionInfo.classList.add("info");
    sectionResult.classList.add("resultado");
    subtitulo1.classList.add("info_titulo");
    subtitulo2.classList.add("result_titulo");
    sectionInfoParrafo.classList.add("info_parrafo");
    //Construyendo el formulario
    formulario.setAttribute("action", "");
    labelEntradaNumero.setAttribute("for", "numero");
    entradaNumero.setAttribute("title", "Para mostrar los resultados ingrese un número negativo.");
    const atributosEntradaNumero = [["type", "number"], ["name", "numero"], ["id", "numero"], ["min", "-1"], ["placeholder", "Ingresar aquí"]];
    
    for (let i = 0; i < atributosEntradaNumero.length; i++) {
        entradaNumero.setAttribute(atributosEntradaNumero[i][0], atributosEntradaNumero[i][1]);
    }

    btnEnviar.setAttribute("onclick", "iniciarPrograma()");
    btnEnviar.setAttribute("id", "btnEnviar");
    articuloAgregarInfo.setAttribute("id", "articleAddInfo");
    articuloMostrarTabla.setAttribute("id", "articleShowTable");
    asideTarjetaInfo.classList.add("asideArticleTable");

    // Anexando elementos a etiquetas padre
    cuerpo.appendChild(principal);
    principal.appendChild(sectionInfo);
    principal.appendChild(sectionResult);
    sectionInfo.appendChild(subtitulo1);
    subtitulo1.appendChild(textoSubtitulo1);
    sectionResult.appendChild(subtitulo2);
    subtitulo2.appendChild(textoSubtitulo2);
    sectionInfo.appendChild(sectionInfoParrafo);
    sectionInfoParrafo.appendChild(textoInfoSection);
    //Construyendo el formulario
    sectionResult.appendChild(articuloAgregarInfo);
    sectionResult.appendChild(articuloMostrarTabla);
    articuloAgregarInfo.appendChild(formulario);
    formulario.appendChild(labelEntradaNumero);
    formulario.appendChild(entradaNumero);
    labelEntradaNumero.appendChild(textoLabelEntradaNumero);
    articuloAgregarInfo.appendChild(btnEnviar);
    btnEnviar.appendChild(textoBtnEnviar);
    articuloMostrarTabla.appendChild(asideTarjetaInfo);
    asideTarjetaInfo.appendChild(tarjetaInfo);
}

function construirTablaResultado(mostrarInfo) {
    const tabla = document.createElement("table");
    const tablaEncabezado = document.createElement("thead");
    const tablaCuerpo = document.createElement("tbody");
    const tablaPie = document.createElement("tfoot");
    const filaTabla = document.createElement("tr");
    const countTabla = document.createElement("th");
    const numberTabla = document.createElement("th");

    // Creando los nodos de texto necesarios
    const textoCountTabla = document.createTextNode("Cant. Números");
    const textoNumberTabla = document.createTextNode("Números");

    // Agregando los atributos necesarios
    tabla.classList.add("tablaResultado");
    tabla.setAttribute("border", "1");

    // Anexando elementos a etiquetas padre
    mostrarInfo.appendChild(tabla);
    tabla.appendChild(tablaEncabezado);
    tabla.appendChild(tablaCuerpo);
    tabla.appendChild(tablaPie);
    tablaEncabezado.appendChild(filaTabla);
    filaTabla.appendChild(countTabla);
    filaTabla.appendChild(numberTabla);
    countTabla.appendChild(textoCountTabla);
    numberTabla.appendChild(textoNumberTabla);
}

function ordenamientoBurbuja(lstSumaNum) {
    let copiaLstSumaNum = [];
    lstSumaNum.forEach(num => copiaLstSumaNum.push(num));

    for (let i = 0; i < copiaLstSumaNum.length; i++) {
        for (let j = i + 1; j <= copiaLstSumaNum.length; j++) {
            if (copiaLstSumaNum[i] > copiaLstSumaNum[j]) {
                t = copiaLstSumaNum[i];
                copiaLstSumaNum[i] = copiaLstSumaNum[j];
                copiaLstSumaNum[j] = t;
            }
        }
    }

    return copiaLstSumaNum;
}

function escribirInfoTabla(lstSumaNum) {
    const showTable = document.getElementById("articleShowTable");
    const tbody = showTable.querySelector("tbody");
    const fila = document.createElement("tr");
    const infoNumInput = document.createElement("td");
    const infoNums = document.createElement("td");

    const textnodeInfoNumInput = document.createTextNode(lstSumaNum.length);
    const textnodeInfoNums = document.createTextNode(lstSumaNum.length > 0 ? lstSumaNum[lstSumaNum.length - 1] : "");

    tbody.appendChild(fila);
    fila.appendChild(infoNumInput);
    fila.appendChild(infoNums);
    infoNumInput.appendChild(textnodeInfoNumInput);
    infoNums.appendChild(textnodeInfoNums);
}

function verificarNodos() {
    const divContainer = document.getElementById("principal").querySelector(".resultado").querySelector("aside");
    if (divContainer.hasChildNodes()) {
        divContainer.innerHTML = "";
    }
}

function escribirInfoTarjeta(infoEscribir, referenciaInfo) {
    const tarjetaInfo = document.getElementById("articleShowTable").querySelector(".asideArticleTable");

    verificarNodos();
    for (let i = 0; i < infoEscribir.length; i++) {
        const textoSpan = document.createElement("span");
        const nodoTextoSpan = document.createTextNode(`${referenciaInfo[i]}: ${infoEscribir[i]}`);
        tarjetaInfo.appendChild(textoSpan);
        textoSpan.appendChild(nodoTextoSpan);
    }
}

function verificarModa(dictModa) {
    let lstModa = [];

    dictModa.forEach((v, c) => {
        if (v !== 1) {
            console.log("ESTOY AQUÍ!!!  " + c);
            lstModa.push(c);
        }
    });
    return lstModa;
}

function calcMath(lstSumaNum, numeroUsuario) {
    // Calcular la suma de todos los números
    suma += lstSumaNum[lstSumaNum.length - 1];

    // Calcular la media de los números
    media = suma / lstSumaNum.length;

    // Calcular la mediana de los números
    let lstNumerosOrdenados = ordenamientoBurbuja(lstSumaNum);
    if (lstSumaNum.length % 2 == 0) {
        posicionFormulaMin = Math.floor((lstNumerosOrdenados.length + 1) / 2); // Primer número que está en la mitad
        posicionFormulaMax = Math.ceil((lstNumerosOrdenados.length + 1) / 2); // Segundo número en la mitad
        mediana = (lstNumerosOrdenados[posicionFormulaMin - 1] + lstNumerosOrdenados[posicionFormulaMax - 1]) / 2;

    } else {
        posicionFormula = (lstNumerosOrdenados.length + 1) / 2;
        mediana = lstNumerosOrdenados[posicionFormula - 1];
    }

    // Calcular la moda
    let copiaLstSumaNum = [];
    lstSumaNum.forEach(num => copiaLstSumaNum.push(num));
    let count = 0, valorCopia = 0, claveCopia = 0;

    copiaLstSumaNum.filter((num) => {
        if (numeroUsuario === num) {
            count++;
            moda.set(num, count);
        }
    });

    moda.forEach((v, c) => {
        if (v > valorCopia) {
            valorCopia = v;
            claveCopia = c;
        }
    });

    let referenciaInfo = ["Suma total", "Media", "Mediana", "Moda"];
    escribirInfoTarjeta([suma, media, mediana, verificarModa(moda)], referenciaInfo);
}


function iniciarPrograma() {
    const agregarInfo = document.getElementById("articleAddInfo");
    const btnEnviar = document.getElementById("btnEnviar");
    const form = agregarInfo.querySelector("form");
    const formularioDatos = new FormData(form);
    let numUserValidado = validarNumero(formularioDatos.getAll("numero"));

    console.log("NUM-USER-VALIDADO: " + numUserValidado);
    if (numUserValidado === true) {
        alert("Programa finalizado. ¡Veámos los resultados!");
        btnEnviar.setAttribute("disabled", "true");

    } else if (numUserValidado === false) {
        while (validarNumero(formularioDatos.getAll("numero")) === false) {
            numUserValidado = validarNumero(formularioDatos.getAll("numero"));
        }

    } else if (numUserValidado !== true || numUserValidado !== false) {
        lstSumaNum.push(numUserValidado);
        console.log(lstSumaNum);
        escribirInfoTabla(lstSumaNum);
        calcMath(lstSumaNum, numUserValidado);

    } else {
        alert("Ha ocurrido un error inesperado. Inténtalo de nuevo.");
        alert("Recargando página...");
        location.reload();
    }
}

function construirPrograma(metadata, cuerpo) {
    // Construir sitio web
    construirMetadata(metadata);
    construirEncabezado(cuerpo);
    construirPrincipal(cuerpo);

    const mostrarInfo = document.getElementById("articleShowTable");
    construirTablaResultado(mostrarInfo);
}

construirPrograma(document.getElementById("metadata"), document.getElementById("cuerpo"));