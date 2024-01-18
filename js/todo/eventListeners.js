import * as variables from "./../variables.js";
import { addTask } from "./../todo/agregarTarea.js";

export const eventosEscucha = () => {
    variables.perfilImg.addEventListener("click", (e) => {
        //pass
    });

    variables.elegirEstado.addEventListener("click", (e) => {
        if (e.target.classList[0] !== "elegirEstado") {
            const infoDataset = e.target.children.length >= 1 ? e.target.dataset.estado : e.target.parentNode.dataset.estado;

            for (let i = 0; i < variables.lstTarjetasEstado.length; i++) {
                variables.lstTarjetasEstado[i].classList[0] === infoDataset 
                    ? variables.lstTarjetasEstado[i].classList.remove("oculto")
                    : variables.lstTarjetasEstado[i].classList.add("oculto");
            }
        }
    });

    variables.pieDePagina.addEventListener("click", (e) => {
        if (e.target.children.length >= 1) {
            if (e.target.dataset.btn === "home") {


            } else if (e.target.dataset.btn === "add") {
                variables.agregarTarea.classList.remove("oculto");

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

    variables.botones.addEventListener("click", (e) => {
        e.target.dataset.btntarea === "agregar" 
            ? addTask()
            : variables.agregarTarea.classList.add("oculto");
    });

    variables.toggle.addEventListener("click", () => menu.classList.toggle("menu_active"));
    variables.addTask.addEventListener("click", () => variables.agregarTarea.classList.remove("oculto"));
}