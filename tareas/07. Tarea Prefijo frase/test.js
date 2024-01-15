const arrayTest = ["pay", "attention", "practice", "attend"];
const prefix = "at";
let count = 0;


function testReduce(palabraReduce) {
    if (palabraReduce.startsWith(prefix)) {
        count++;
    }
}

function encontrarPrefijo(palabra, valueCurrent) {
    testReduce(palabra); // Envía el valor de palabra a la función testReduce() para que la procese
    return valueCurrent;
}


// Hace que el último valor del array también sea procesado por la función y no se pierda
function iniciarPrograma() {
    

    testReduce(arrayTest.reduce(encontrarPrefijo));
    console.log(`En el array, hay ${count} palabras con el prefijo "${prefix}".`);
}

iniciarPrograma();