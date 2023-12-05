let palabras = ["Hola", "Tengo", "Un", "Misil", "en", "mi", "placard"];

let palabrasFiltradas = palabras.filter(function (e) {
    if (e.length >= 4) {
        return e;
    }
});

console.log(palabrasFiltradas);


let palabraFilter = palabras.filter((e) => {if (e.length >= 4) return e;});
console.log(palabraFilter);