// console.log("Inicio de la tarea");

// //Simular una operación asincrónica dos segundos después
// setTimeout(function() {
//     console.log("Tarea asincrónica completada 2 segs después");
// });
// console.log("Tarea principal continúa");





// console.log("");
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// // Call removeNeg with a callback
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
// console.log(posNumbers);

// // Keep only positive numbers
// function removeNeg(numbers, callback) {
//     const myArray = [];
//     for (const x of numbers) {
//         if (callback(x)) {
//             myArray.push(x);
//         }
//     }
//     return myArray;
// }



// setTimeout(() => {
//     console.log("He ejecutado la función");
// }, 2000);



console.log("");
function realizarTareaAsincronica(callback) {
    setTimeout(function () {
        console.log("Tarea asincrónica completada");
        callback();
    }, 2000);
}
function miCallback() { // Función de callback
    console.log("El callback se ha ejecutado");
}
// Llamando a la función asincrónica y pasando el callback
realizarTareaAsincronica(miCallback);
console.log("Tarea principal continúa");