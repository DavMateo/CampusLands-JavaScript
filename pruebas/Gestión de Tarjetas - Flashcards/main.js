let count = 1;

function construir_crearFlashcard(principal) {
    principal.innerHTML = `
        <div class="container">
            <h2 class="container_titulo">Crear Flashcard</h2>

            <form class="formulario" onsubmit="return false;" action="">
                <div class="formulario_pregunta">
                    <label for="pregunta">Pregunta</label>
                    <input type="text" name="pregunta" id="pregunta" />
                </div>

                <div class="formulario_respuesta">
                    <label for="respuesta">Respuesta</label>
                    <input type="text" name="respuesta" id="respuesta" />
                </div>
            </form>

            <div class="botones">
                <button class="botones_guardar" onclick="iniciarPrograma('guardar')">Guardar</button>
                <button class="botones_cerrar" onclick="iniciarPrograma('cerrar')">Cerrar</button>
            </div>
        </div>
    `;

    const containerFlashcard = document.createElement("div");
    containerFlashcard.setAttribute("id", "containerFlashcard");
    principal.appendChild(containerFlashcard);
}


function getInfoForm() {
    const principal = document.getElementById("principal");
    const formulario = principal.querySelector(".container").querySelector(".formulario");
    const formData = new FormData(formulario);

    let pregunta = formData.get("pregunta");
    let respuesta = formData.get("respuesta");
    construirFlashcard(pregunta, respuesta, principal);
}

function construirFlashcard(pregunta, respuesta, principal) {
    const containerFlashcard = document.getElementById("containerFlashcard");

    // Creando los nuevos elementos
    const flashcard = document.createElement("div");
    const flashcardEncabezado = flashcard.cloneNode();
    const flashcardPregunta = flashcard.cloneNode();
    const flashcardRespuesta = flashcard.cloneNode();
    const flashcardCerrar = document.createElement("button");

    // Agregándole los atributos necesarios
    flashcard.classList.add("flashcard");
    flashcard.setAttribute("id", `flashcard${count}`);
    flashcardEncabezado.classList.add("flashcard_encabezado");
    flashcardCerrar.classList.add("flashcard_btnCerrar");
    flashcardCerrar.setAttribute("onclick", `flashcard${count}.remove()`);
    flashcardPregunta.classList.add("flashcard_pregunta");
    flashcardRespuesta.classList.add("flashcard_respuesta");
    flashcardPregunta.setAttribute("data-num", count);
    flashcardRespuesta.setAttribute("data-num", count);
    flashcardRespuesta.classList.add("flashcard_respuesta--disabled");
    count++;

    // Creando y anexando los nodos de texto necesarios
    flashcardPregunta.textContent = pregunta;
    flashcardRespuesta.textContent = respuesta;
    flashcardCerrar.textContent = "X";

    // Incrustrando los elementos creados a la etiqueta "main"
    flashcard.appendChild(flashcardEncabezado);
    flashcard.appendChild(flashcardPregunta);
    flashcard.appendChild(flashcardRespuesta);
    flashcardEncabezado.appendChild(flashcardCerrar);
    containerFlashcard.appendChild(flashcard);

    flashcard.addEventListener("click", (e) => {
        flashcardRespuesta.classList.toggle("flashcard_respuesta--disabled");
    });

    btnEliminar(true);
}

function btnGuardar() {
    getInfoForm();
}

function btnEliminar(checked = false) {
    const eliminarTarjetas = document.getElementById("containerFlashcard");
    const btnEliminar = document.getElementById("btnEliminar");

    if (checked) {
        try {
            if (eliminarTarjetas.childElementCount === 0) {
                btnEliminar.classList.add("navBtn_lista-item--disabled");
    
            } else {
                btnEliminar.classList.remove("navBtn_lista-item--disabled");
            }
    
        } catch(error) {
            if (error.name !== "TypeError") {
                console.error(error.message);
    
            }
        }

    } else {
        if (eliminarTarjetas.childElementCount >= 0) {
            eliminarTarjetas.innerHTML = "";
        }
    }
}


// Función principal donde se iniciará todo el programa al hacer click en los botones
function iniciarPrograma(peticion) {
    if (peticion === "guardar") {
        btnGuardar();

    } else if (peticion === "cerrar") {
        const container = document.getElementById("principal").querySelector(".container");
        container.remove();
        
    } else {
        console.error("El botón presionado no corresponde a una opción conocida.")
    }
}



// Ejecutar el siguiente código apenas cargue el documento HTML.
window.onload = function() {
    const botones = document.getElementById("encabezado").querySelectorAll(".navBtn_lista-item");
    const principal = document.getElementById("principal");

    botones.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            try {
                if (e.target.dataset.info === "agregar") {
                    construir_crearFlashcard(principal);

                } else {
                    if (e.target.dataset.info === "eliminar") {
                        "";
                    } else {
                        throw new Error("El botón presionado no corresponde a alguno con un parámetro conocido.");
                    }
                }

            } catch(error) {
                console.error(error.message);
            }
        });
    });
}