// Definiendo las variables globales necesarias
const btnMiPokemon = document.getElementById("miPokemon").querySelector("miPokemon_btn");
const btnFigth = document.getElementById("btnFigth");
let infoPokemonUser = null, infoPokemonCpu = null;
let isbtnFightPress = false;


//Agregando los eventos de escucha necesarios al HTML
btnFigth.addEventListener("click", (e) => {
    if (btnFigth.dataset.state === "disabled") {
        alert("Antes de iniciar la batalla, debes elegir a tu pokemón.");

    } else if (btnFigth.dataset.state === "active") {
        escogerPokemon('cpu');

    } else {
        alert("Ha ocurrido un error inesperado. Recarga la página e intenta de nuevo.");
    }
});


// Definiendo las funciones necesarias
function buscarPokemonAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function getInfoPokemon(peticion) {
    const url = `https://pokeapi.co/api/v2/pokemon/${buscarPokemonAleatorio(1, 806)}`;
    const respuesta = await fetch(url);
    const respuestaJson = await respuesta.json();

    return new Promise((resolve, reject) => {
        if (respuesta.ok) {
            resolve({
                imagen: respuestaJson.sprites.other["official-artwork"].front_default,
                nombre: respuestaJson.name,
                atributos: [
                    [respuestaJson.stats[0].stat.name, respuestaJson.stats[0].base_stat],
                    [respuestaJson.stats[1].stat.name, respuestaJson.stats[1].base_stat],
                    [respuestaJson.stats[2].stat.name, respuestaJson.stats[2].base_stat],
                    [respuestaJson.stats[5].stat.name, respuestaJson.stats[5].base_stat]
                ],

                construirMapa: function() {
                    if(peticion === "user") {
                        const dictPokemonUser = new Map();

                        this.atributos.forEach((lstAtributo) => {
                            dictPokemonUser.set(lstAtributo[0], lstAtributo[1]);
                        });
                        return dictPokemonUser;

                    } else if(peticion === "cpu") {
                        const dictPokemonCpu = new Map();

                        this.atributos.forEach((lstAtributo) => {
                            dictPokemonCpu.set(lstAtributo[0], lstAtributo[1]);
                        });

                        return dictPokemonCpu;

                    } else {
                        return "Error. Algo ha ido mal, por favor recargue la página e inténtelo de nuevo.";
                    } 
                }
            });

        } else {
            reject("Error 560 xD");
        }
    });
}

async function escogerPokemon(peticion) {
    if (peticion === "user") {
        btnFigth.dataset.state = "active";
        btnFigth.classList.remove("btnFigth--disabled");
    }

    await getInfoPokemon(peticion)
        .then(respuesta =>  iniciarCombate(peticion, respuesta) )

        .catch(error =>  console.error(error) );
}

async function mostrarPokemonAleatorio7seg(peticion) {
    const cpuPokemon = document.getElementById("cpuPokemon");
    let count = 1;

    const idIntervalo = setInterval(async () => {
        if (count < 7) {
            let infoPokemon = await getInfoPokemon(peticion);

            cpuPokemon.innerHTML = `
                <img class="miPokemon_img" src=${infoPokemon.imagen} alt="pokemon_${infoPokemon.nombre}" />
            `;

        } else {
            clearInterval(idIntervalo);
            await getInfoPokemon(peticion)
                .then(respuesta => iniciarCombate(peticion, respuesta, true, cpuPokemon))

                .catch(error => console.error(error) );
        }
        count++;

    }, 1000);
}


async function iniciarCombate(peticion, infoPokemon, checked = false, elementoHTML) {
    const contenedorMiPokemon = document.getElementById("miPokemon").querySelector(".miPokemon_info");
    let turno = 1;

    if (peticion === "user") {
        infoPokemonUser = infoPokemon;
        construirTarjetaPokemon(peticion, infoPokemon, contenedorMiPokemon);

    } else if (peticion === "cpu") {
        if (checked) {
            infoPokemonCpu = infoPokemon;
            construirTarjetaPokemon(peticion, infoPokemon, elementoHTML);

        } else {
            mostrarPokemonAleatorio7seg(peticion);
        }
    }


    // Algoritmo de batalla
    try {
        if (infoPokemonUser.construirMapa().get("hp") > 0 && infoPokemonCpu.construirMapa().get("hp") > 0) {
            console.log("ENTRE AQUÍ EN EL ALGORITMO DE BATALLA");
        }

    } catch(err) {
        if (err.name === "TypeError") {
            //pass
        }
    }
}


function construirTarjetaPokemon(peticion, infoPokemon, elementoHTML) {
    let dictPokemon = infoPokemon.construirMapa(peticion);
    console.log(dictPokemon, peticion);

    if (peticion === "user") {
        elementoHTML.innerHTML = `
            <img class="miPokemon_img" src=${infoPokemon.imagen} alt="pokemon_${infoPokemon.nombre}" />
            <p class="miPokemon_infoText">${infoPokemon.nombre}</p>
            <p class="miPokemon_infoText">${infoPokemon.atributos[0][0]}: ${infoPokemon.atributos[0][1]}</p>
            <p class="miPokemon_infoText">${infoPokemon.atributos[1][0]}: ${infoPokemon.atributos[1][1]}</p>
            <p class="miPokemon_infoText">${infoPokemon.atributos[2][0]}: ${infoPokemon.atributos[2][1]}</p>
            <p class="miPokemon_infoText">${infoPokemon.atributos[3][0]}: ${infoPokemon.atributos[3][1]}</p>
        `;

    } else if (peticion === "cpu") {
        elementoHTML.innerHTML = `
            <button class="miPokemon_btn miPokemon_btn--cpu">CPU Pokemón</button>
            <div class="cpuPokemon_info">
                <img class="miPokemon_img" src=${infoPokemon.imagen} alt="pokemon_${infoPokemon.nombre}" />
                <p class="miPokemon_infoText">${infoPokemon.nombre}</p>
                <p class="miPokemon_infoText">${infoPokemon.atributos[0][0]}: ${infoPokemon.atributos[0][1]}</p>
                <p class="miPokemon_infoText">${infoPokemon.atributos[1][0]}: ${infoPokemon.atributos[1][1]}</p>
                <p class="miPokemon_infoText">${infoPokemon.atributos[2][0]}: ${infoPokemon.atributos[2][1]}</p>
                <p class="miPokemon_infoText">${infoPokemon.atributos[3][0]}: ${infoPokemon.atributos[3][1]}</p>
            </div>
        `;
    }
}