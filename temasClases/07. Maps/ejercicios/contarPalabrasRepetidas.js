const texto = "Este es un ejemplo de un texto que es ideal para procesar";
const contadorPalabras = new Map();
let arrTextoSeparado = texto.toLowerCase().split(" ");
let contador = 0;

console.log("ARRAY: " + arrTextoSeparado); // ELIMINAR LUEGO

for (i = 0; i < arrTextoSeparado.length; i++) {
    let palabraActual = arrTextoSeparado[i];
    console.log("PALABRA ACTUAL: " + palabraActual); // ELIMINAR LUEGO

    for (j = 0; j < arrTextoSeparado.length - 1; j++) {
        if (palabraActual === arrTextoSeparado[j+1]) {
            console.log("ESTA ES LA PALABRA REPETIDA: " + palabraActual); // ELIMINAR LUEGO
            contador++;
            delete(arrTextoSeparado[j+1]);
        } else {
            
        }
    }
}