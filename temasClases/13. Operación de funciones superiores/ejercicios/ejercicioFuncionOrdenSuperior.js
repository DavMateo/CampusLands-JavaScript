function operaciones(callback, num) {
    const arrResult = [];

    for (i = 0; i < num; i++) {
        arrResult.push(callback(4 + i, (3 * i === 0 ? 1 : i) + 5));
    }

    return arrResult;
}

const resultado = operaciones((num1, num2) => {
    return num1 * num2;
}, 3);

console.log(resultado);