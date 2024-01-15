// Crear una promesa que simula una operación asíncrona
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Resuelve la promesa después de un retraso simulado
        resolve("¡Operación completada con éxito!");
    }, 2000);
});

console.log("Inicio de la operación");

miPromesa
    .then(resultado => {
        console.log(resultado)  // Se ejecuta cuando la promesa se cumple
    })
    .catch(error => {
        console.error("Error:", error);  // Manejar errores si la promesa se rechaza
    });

    console.log("Tareas adicionales");  // Se ejecuta antes de que la promesa se complete