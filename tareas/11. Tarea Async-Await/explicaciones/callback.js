// JS utiliza Callbacks para manejar código asíncrono.


// El siguiente ejemplo es "La pirámide de la muerte".
function requestHandler(req, res) {
    // Consultará el usuario en una base de datos y cuando este devuelva una respuesta, manejará la respuesta en la función (Parámetro2).
    User.findById(req.userId, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            // Buscar todas las tareas que le pertenezcan a un usuario
            Tasks.findById(user.tasksId, function(err, tasks) {
                if (err) {
                    return res.send(err);
                } else {
                    tasks.completed = true;
                    tasks.save(function(err) {
                        if (err) {
                            return res.send(err);
                        } else {
                            res.send("Tarea completada");
                        }
                    });
                }
            });
        }
    });

}


/*
    requestHandler ==> Manejador de petición.
*/