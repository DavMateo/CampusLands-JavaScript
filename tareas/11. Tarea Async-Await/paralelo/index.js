const { taskOne, taskTwo } = require("./tareas");

async function main() {
    try {
        console.time("Midiendo tiempo");
        const resultados = await Promise.all([taskOne(), taskTwo()]);
        console.timeEnd("Midiendo tiempo");

        console.log("Tarea uno: " + resultados[0]);
        console.log("Tarea dos: " + resultados[1]);
    } catch(e) {
        console.log(e);
    }
}

main();



/*
    APUNTES:

    1. Promise.all() recibe un arreglo con todos los métodos o funciones que se ejecutarán de manera 
    asíncrona. Esto puede ir acompañado de la palabra clave "await" solo si está acompañada de la
    palabra clave "async".

    2. Ejecutar tareas paralelas permite que el código no tenga que esperar hasta que termine 
    una petición para continuar con la siguiente, por lo que en este caso, podría ejecutarse todas 
    las peticiones del código especificadas dentro de "promise.all() al tiempo."

    3. Si ocurre algún error, entonces el parámetro que ha generado el error se imprimirá en el
    catch() y las demás se seguirán ejecutando normal sin problema alguno.
*/