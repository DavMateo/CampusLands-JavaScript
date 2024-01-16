// DECLARANDO LAS VARIABLES Y CONSTANTES NECESARIAS
const perfilImg = document.getElementById("encabezadoImagen");
const elegirEstado = document.getElementById("elegirEstado");
const pieDePagina = document.getElementById("pieDePagina");
const seccionResumen = document.getElementById("resumen");
const lstTarjetasEstado = document.querySelectorAll(".tgteas");
const agregarTarea = document.getElementById("agregarTarea");
const botones = document.getElementById("botones");

// AGREGANDO LOS EVENTOS DE ESCUCHA
perfilImg.addEventListener("click", (e) => {
    //pass
});

elegirEstado.addEventListener("click", (e) => {
    if (e.target.classList[0] !== "elegirEstado") {
        const infoDataset = e.target.children.length >= 1 ? e.target.dataset.estado : e.target.parentNode.dataset.estado;
        
        for (let i = 0; i < lstTarjetasEstado.length; i++) {
            if (lstTarjetasEstado[i].classList[0] === infoDataset) {
                lstTarjetasEstado[i].classList.remove("oculto");
            } else {
                lstTarjetasEstado[i].classList.add("oculto");
            }
        }
    }
});

pieDePagina.addEventListener("click", (e) => {
    if (e.target.children.length >= 1) {
        if (e.target.dataset.btn === "home") {


        } else if (e.target.dataset.btn === "add") {
            agregarTarea.classList.remove("oculto");

        } else if (e.target.dataset.btn === "category") {

        }

    } else {
        if (e.target.parentNode.dataset.btn === "home") {


        } else if (e.target.parentNode.dataset.btn === "add") {
            agregarTarea.classList.remove("oculto");

        } else if (e.target.parentNode.dataset.btn === "category") {

        }
    }
});

botones.addEventListener("click", (e) => {
    console.log(e);

    if (e.target.dataset.btntarea === "agregar") {
        console.log(e.target);

    } else if (e.target.dataset.btntarea === "cancelar") {
        agregarTarea.classList.add("oculto");
    }
});


window.onload = function() {
    agregarTarea.classList.add("oculto");
    lstTarjetasEstado.forEach(tarjeta => tarjeta.classList.add("oculto"));
}