// Declarando las funciones de validación
function validarInfoObj(obj, objTypeConstraint, idItem) {
    let lstResult = [], lstKeysObj = [];

    try {
        // Verifica que no hayan datos mezclados en el objeto recibido
        obj.forEach((item) => {
            if (Object.prototype.toString.call(item) === `[object ${objTypeConstraint}]`) {
                throw new Error("Error: No pueden haber dos tipos de datos en la misma lista a agrupar.");
            }
        });

        // Si lo anterior no lanza ningún error, el código tomará cada objeto y extraerá el ID de cada uno
        for (const item of obj) { 
            lstResult.push(item[idItem(item)]); 
            lstKeysObj.push(item[idItem(item)]);
        }

    } catch(error) {
        console.error(error.message);
        return false;
    }
    return [lstResult, lstKeysObj];
}

function validarLongArray(obj) {
    return obj.length < 1 ? "Error: No puedes ingresar un array vacio" : groupBy(obj);
}


// Definiendo las funciones necesarias
function groupBy(obj) {
    let lstResult = [], lstKeysObj = [], result1 = null, objResult = {};

    if (Object.prototype.toString.call(obj) === "[object Array]") {
            // Evaluar distintos casos donde podría usarse la función usando el operador ternario.
            result1 = typeof(obj[0]) === "number"
                        ? (objResult["true"] = [], objResult["false"] = [], 
                        obj.forEach(item => item > 5 ? objResult["true"].push(item) : objResult["false"].push(item)), [objResult, "arrOne"])

                        : Object.prototype.toString.call(obj[0]) === "[object Object]" 
                        ? [lstResult, lstKeysObj] = validarInfoObj(obj, "Array", (item) => { return Object.keys(item) })

                        : Object.prototype.toString.call(obj[0]) === "[object Array]"
                        ? [lstResult, lstKeysObj] = validarInfoObj(obj, "Object", (item) => { return 0 }) : "";
    } else {
        console.error("Error: el objeto ingresado no es un Array.");
    }
    return (result1[1] === "arrOne") ? result1[0] : formatResult(lstResult, lstKeysObj, obj);
}

function formatResult(elem, keys, obj) {
    let objOutput = {};

    // En la variable "objOutput" se almacenará la respectiva respuesta.
    elem.forEach((id) => {
        for (let i = 0; i < elem.length; i++) {  
            elem[i] === id ? (objOutput.hasOwnProperty(keys[i]) === true ? objOutput[keys[i]].push(obj[i]) : objOutput[keys[i]] = [obj[i]], delete elem[i]) : "";
        }
    });
    return objOutput;
}

function construirRespuestaHtml(lstRes, element) {
  console.log(element);
  
  for(let i = 0; i < lstRes.lenght; i++) {
    //Creando los elementos HTML
    const container = document.createElement("div");
    const containerEncabezado = document.createElement("div");
    const contEncabezadoTitulo = document.createElement("h3");
    const resultado = document.createElement("div");
    const resultadoTexto = document.createElement("p");
    
    //Agregando los atributos necesarios
    container.classList.add("container");
    containerEncabezado.classList.add("container_encabezado");
    resultado.classList.add("resultado");
    resultadoTexto.classList.add("resultado_code");
    
    //Agregando los respectivos nodos de texto
    const textoTituloContainer = document.createTextNode(`Resultado ${i+1}`);
    contEncabezadoTitulo.appendChild(textoTituloContainer);
    
    lstRes.forEach((valRes) => {
      let textResultado = document.createTextNode(`${valRes}  `);
      resultadoTexto.appendChild(textResultado);
    });
    
    //Agregando los elementos creados al DOM
    resultado.appendChild(resultadoTexto);
    containerEncabezado.appendChild(contEncabezadoTitulo);
    container.appendChild(containerEncabezado);
    container.appendChild(resultado);
    element.appendChild(container);
  }
}


// Programa principal
const arrayId = [{"id": "1"}, {"id": "1"}, {"id": "2"}];
const arrayNum = [[1, 2, 3], [1, 3, 5], [1, 5, 9]];
const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lstConstRes = [arrayId, arrayNum, arrayOne];
const principal = document.getElementById("principal");

console.log(principal);
construirRespuestaHtml(lstConstRes, principal);
