// function requestHandler(req, res) {
//     // Consultará el usuario en una base de datos y cuando este devuelva una respuesta, manejará la respuesta en la función (Parámetro2).
//     User.findById(req.userId, function(err, user) {
//         if (err) {
//             res.send(err);
//         } else {
//             // Buscar todas las tareas que le pertenezcan a un usuario
//             Tasks.findById(user.tasksId, function(err, tasks) {
//                 if (err) {
//                     return res.send(err);
//                 } else {
//                     tasks.completed = true;
//                     tasks.save(function(err) {
//                         if (err) {
//                             return res.send(err);
//                         } else {
//                             res.send("Tarea completada");
//                         }
//                     });
//                 }
//             });
//         }
//     });

// }


// Mismo ejemplo pero con promesas
function requestHandler(req, res) {
    User.findById(req.userId)
        .then((user) => {  // Ocurre cuando todo va bien
            return Tasks.findById(user.tasksId)
        })
        .then((tasks) => {
            tasks.completed = true;
            return tasks.save();
        })
        .then(() => {
            res.send("Tareas completadas");
        })

        // El catch capturará todos los errores de las promesas anteriores
        .catch((errores) => {  // Se ejecuta cuando algo va mal (Manejar el error)
            res.send(errores);
        })
}


/* 

    APUNTES:

    1. Para usar más de una promesa o emplear promesas anidadas, al momento en que termina el ".then" sería retornar el valor
    para así poderlo usar en la siguiente promesa. Esto solo sería valido si el valor a retornar es un callback.

    
*/