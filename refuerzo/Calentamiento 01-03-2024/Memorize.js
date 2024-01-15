// DECLARANDO LAS VARIABLES GLOBALES NECESARIAS
let count = 0, fnNameCopy, valuesCopy, strAnalizar = [];

// DECLARANDO LAS FUNCIONES PRINCIPALES
function memoized(fnName, values) {
    fnNameCopy = fnName;
    const strArrayAnalizar = JSON.stringify(strAnalizar);
    const strValues = JSON.stringify(values);

    strArrayAnalizar.indexOf(strValues) !== -1 && fnName === fnNameCopy ? "" : count++;
    strAnalizar.push(values);

    return fnName === "sum" ? values[0] + values[1] : fnName === "fib" ? 0 : fnName === "factorial" ? 0 : "";
}

// DECLARANDO LA FUNCIÓN INICIALIZADORA
function iniciarPrograma() {
    const arrTest = [[2,2], [2,2], [], [1,2], []];
    let arrResultado = [];

    for (let i = 0; i < arrTest.length; i++) {
        arrTest[i].length === 0 ? arrResultado.push(count) : arrResultado.push(memoized("sum", arrTest[i]));
    }
    console.log(arrResultado);
}

iniciarPrograma();