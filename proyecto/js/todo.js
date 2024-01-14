// DECLARANDO LAS VARIABLES Y CONSTANTES NECESARIAS
const perfilImg = document.getElementById("encabezadoImagen");
const elegirEstado = document.getElementById("elegirEstado");
const pieDePagina = document.getElementById("pieDePagina");
const seccionResumen = document.getElementById("resumen");
const lstTarjetasEstado = []

// AGREGANDO LOS EVENTOS DE ESCUCHA
perfilImg.addEventListener("click", (e) => {
    //pass
});

elegirEstado.addEventListener("click", (e) => {
    if (e.target.classList[0] !== "elegirEstado") {
        const infoDataset = e.target.children.length >= 1 ? e.target.dataset.estado : e.target.parentNode.dataset.estado;
        
    }
});

pieDePagina.addEventListener("click", (e) => {
    //pass
});