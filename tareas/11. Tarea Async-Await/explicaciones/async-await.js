async function requestHandler(req, res) {
    try {
        const user = await User.findById(req.userId);  // Indica al código que esto será asíncrono (tomará tiempo) y al terminar guardarlo o solo ejecutarlo.
        const tasks = await Tasks.findById(user.tasksId);
        tasks.completed = true;
        await tasks.save();  // Si no hay info importante por guardar, se puede dejar sin variable.
        res.send("Tareas completadas.");

    } catch (e) {
        res.send(e);
    }
}


/* 

    APUNTES:

    1. El "try" intenta ejecutar el código almacenado dentro de ese bloque. Si algo va mal, entonces 
    detiene su ejecución en el "try", pasa al "catch" y ejecuta el código que está contenido ahí.

    2. El "try-catch" ayuda al manejo de errores similar a como usar condicionales "if-else" en los 
    callbacks o el ".then-.catch" de las promesas.
*/