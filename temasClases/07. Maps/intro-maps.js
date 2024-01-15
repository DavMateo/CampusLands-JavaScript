const frutas = new Map([["Manzanas", 2500], ["Peras", 2000], ["Banano", 1500]]);
console.log(frutas);
console.log("Cantidad de llaves: " + frutas.size);

frutas.set("Pitahaya", 5000);
frutas.set("Mango", 3000);
console.log(frutas);
console.log("Cantidad de llaves: " + frutas.size);

console.log("La fruta de Camilo es: " + frutas.get("Mango"));

console.log(frutas.delete("Pepino"));
console.log(frutas.delete("Pitahaya"));
console.log("Cantidad de llaves: " + frutas.size);

console.log("El mango existe en la canasta de frutas: " + frutas.has("Mango"));


frutas.forEach((v, k) => {
    console.log(`El precio de ${k} es: $${v} COP`);
});

console.log(" ");

for (const e of frutas.entries()) {
    console.log(`El precio de ${e[0]} es: $${e[1]} COP`);
}

console.log(" ");

for (const [k, v] of frutas.entries()) {
    console.log(`El precio de ${k} es: $${v} COP`);
}