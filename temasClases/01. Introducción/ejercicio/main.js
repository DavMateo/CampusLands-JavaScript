let n1 = Number(prompt("Ingrese un número: "));
let n2 = Number(prompt("Ingrese otro número: "));

let salida = `Sean dos números: ${n1} y ${n2}\n` + "-".repeat(30) + `\n
La suma es: ${n1 + n2}
La resta es: ${n1 - n2}
El producto es: ${n1 * n2}
El cociente es: ${n1 / n2}`;

console.log(salida);
alert(salida);
document.querySelector("body").innerHTML = salida;