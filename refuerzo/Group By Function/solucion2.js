// Definiendo las funciones necesarias
function groupBy(obj, type) {
    let lstResult = [];
    let lstKeysObj = [];

    if (Object.prototype.toString.call(obj) === "[object Array]") {
        try {
            if (obj.lenght === 1) {
                

            } else if (Object.prototype.toString.call(obj[0]) === "[object Object]") {
                try {
                    // Verifica que no hayan datos mezclados en el objeto recibido
                    obj.forEach((item) => {
                        if (Object.prototype.toString.call(item) === "[object Array]") {
                            throw new Error("Error: No pueden haber dos tipos de datos en la misma lista a agrupar.");
                        } 
                    });

                    // Si lo anterior no lanza ningún error, el código tomará cada objeto y extraerá el ID de cada uno
                    for (const item of obj) { 
                        lstResult.push(item[Object.keys(item)]); 
                        lstKeysObj.push(item[Object.keys(item)]);
                    }
    
                } catch(error) {
                    console.error(error.message);
                    return false;
                }

            } else if (Object.prototype.toString.call(obj[0]) === "[object Array]") {
                try {
                    // Verifica que no hayan datos mezclados en el objeto recibido
                    obj.forEach((item) => {
                        if (Object.prototype.toString.call(item) === "[object Object]") {
                            throw new Error("Error: No pueden haber dos tipos de datos en la misma lista a agrupar.");
                        }
                    });

                    // Si lo anterior no lanza ningún error, el código tomará cada array y extraerá el primer número de este
                    for (const item of obj) {
                        lstResult.push(item[0]);
                        lstKeysObj.push(item[0]);
                    }

                } catch (error) {
                    console.error(error.message);
                    return false;
                }
            }

        } catch(err) {
            console.error(err);
        }

    } else {
        console.error("Error: el objeto ingresado no es un Array.");
    }

    let lstResult_copia = [];
    let test = formatResult(lstResult, lstResult_copia, lstKeysObj, type);

    return test;
}

function formatResult(elem, elemCopia, keys, type) {
    let objOutput = {};

    // Dependiendo del tipo de objeto pasado a la función, así mismo actuará el código.
    switch (type) {
        case "object":
            elem.forEach((id) => {
                elemCopia.push(id);

                for (let i = 0; i < elem.length; i++) {  
                    elem[i] === id 
                        ? (objOutput.hasOwnProperty(keys[i]) === true ? objOutput[keys[i]].push(arrayId[i]) : objOutput[keys[i]] = [arrayId[i]], delete elem[i]) 
                        : "";
                } 
            });
            console.log(objOutput);
            break;
        
        case "array":
            elem.forEach((num) => {
                elemCopia.push(num);

                for (let i = 0; i < elem.length; i++) {
                    elem[i] === num 
                        ? (objOutput.hasOwnProperty(keys[i]) === true ? objOutput[keys[i]].push(arrayNum[i]) : objOutput[keys[i]] = [arrayNum[i]], delete elem[i]) 
                        : "";
                }
            });
            console.log(objOutput);
            break;;
        
        case "one":
            break;
    }
}


// Programa principal
const arrayId = [
    {"id": "1"},
    {"id": "1"},
    {"id": "2"}
];

const arrayNum = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
];

const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const resultVar = groupBy(arrayId, "object");
// resultVar === undefined ? "" : console.log(resultVar);

// const resultArray = groupBy(arrayNum, "array");
// resultArray === undefined ? "" : console.log(resultArray);

const resultArrayOne = groupBy(arrayOne, "one");
resultArrayOne === undefined ? "" : console.log(resultArrayOne);