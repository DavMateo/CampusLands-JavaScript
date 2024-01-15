// Creará el conjunto
let letras = new Set();

// Agregar elementos
letras.add("b");
letras.add("c");
letras.add("y");
console.log(letras);


//Borrar elementos
console.log(letras.delete("y"));
console.log(letras);


// Si el elemento existe dentro del conjunto
console.log(letras.has("y"));
console.log(letras.has("c"));


// Recorrido con forEach
letras.forEach(l => console.log(l));


// Recorrido con for of
console.log(" ");
for (const l of letras) {
    console.log(l);
}


//
console.log("Tamaño del conjunto " + letras.size);