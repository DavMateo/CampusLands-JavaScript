let texto = prompt("Ingrese una cadena de texto");
let textoBuscar = prompt("¿Cuál palabra quieres buscar?");
let verificar;

function checkInString(text, term) {
    verificar = text.toLowerCase().filter((word) => {
        if (word === term.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    });
}
checkInString(texto, textoBuscar);
console.log(verificar);