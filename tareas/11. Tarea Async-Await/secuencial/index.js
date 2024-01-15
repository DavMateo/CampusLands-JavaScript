const { taskOne, taskTwo } = require("./tareas");

async function main() {
    try {
        console.time("Midiendo tiempo");
        const valor1 = await taskOne();
        const valor2 = await taskTwo();
        console.timeEnd("Midiendo tiempo");

        console.log("Tarea 1: " + valor1);
        console.log("Tarea 2: " + valor2);
    } catch(e) {
        console.log(e);
    }
}

main();




/* 
    APUNTES:

    1. setTimeout recibe un callback como parámetro (función).

    2. El módulo de NodeJS llamado "util" permite usar funcionalidades del lenguaje. 
    Promisify convierte funciones que se manejan con callbacks a funciones que se manejan 
    con async/await.

    3.La palabra clave "await" solo funciona dentro de funciones que tienen la palabra
    clave "async".

    4. La sentencia "console.time()" permite medir el tiempo de ejecución de un punto a otro. 
    Para indicar el final de la medición del tiempo, se usa "console.timeEnd()".

    5. En el código secuencial con "async/await", al momento de que ocurra un error podría
    seguirse ejecutando secuencialmente, esto si se le agrega las validaciones necesarias
    con el objetivo de que el código no se detenga por un error.
*/