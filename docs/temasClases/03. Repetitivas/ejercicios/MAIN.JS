const MENSAJES = document.getElementById("mensajes");
let numAleatorio = Math.floor(Math.random() * 100 + 1);

for (i = 0; i <= 10; i++) {
    let opcionUsuario = Number(prompt("Ingrese el número (Entre 0 a 100). Digite -1 para salir: "));

    console.log(typeof opcionUsuario);

    let isNumMenor = opcionUsuario < numAleatorio ? true : false;
    let isNumMayor = opcionUsuario > numAleatorio ? true : false;

    console.log(isNumMayor, isNumMenor);
    if (opcionUsuario == -1) {
        alert("SALIENDO...")
        break;
    }

    if (opcionUsuario === numAleatorio) {
        alert("¡FELICIDADES, HAS GANADO!");
        break;
    } else {
        console.log("Inténtelo de nuevo");
        if (isNumMenor) {
            MENSAJES.innerHTML += `Te doy una pista: El número debe ser MAYOR. <br/>`;
        } else if (isNumMayor) {
            MENSAJES.innerHTML += `Te doy una pista: El número debe ser MENOR. <br/>`;
        }
    }
}