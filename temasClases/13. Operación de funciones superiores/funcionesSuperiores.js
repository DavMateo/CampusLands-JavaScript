function operar(arr, operacion, valini = 0) {
    let resultado = valini;
    for (let num of arr) {
        resultado = operacion(resultado, num);
    }
    return resultado;
}

function suma(a, b) {
    return a + b;
}

function producto(a, b) {
    return a * b;
}

const numeros = [1, 2, 3, 4, 5];
const sumaTotal = operar(numeros, suma); // Resultado: 15
const productoTotal = operar(numeros, producto, 1); // Resultado: 120


console.log(sumaTotal);
console.log(productoTotal);