// Crear una promesa
const miPromesa = new Promise((resolve, reject) => {
    // Simulamos una operación asincrónica que toma tiempo en completarse
    setTimeout(() => {
        const exito = false;  // Cambiar a false para simular un rechazo
        if (exito) {
            resolve("¡La promesa se cumplió con éxito!");
        } else {
            reject("Hubo un error al cumplir la promesa");
        }
    }, 2000);  // Simulamos un retraso de 2 segundos
});


// Consumir la promesa
miPromesa
    .then(resultado => {
        console.log("Éxito:", resultado);  // Manejar el caso de éxito
    })
    .catch(error => {
        console.error("Error:", error);  // Manejar el caso de error
    });