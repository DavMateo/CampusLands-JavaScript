// Definiendo las variables globales necesarias
const btnMiPokemon = document.getElementById("miPokemon").querySelector("miPokemon_btn");
const btnFigth = document.getElementById("btnFigth");
let infoPokemonUser = null, infoPokemonCpu = null;


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
    getInfoPokemon(peticion)
        .then(respuesta =>  iniciarCombate(peticion, respuesta) )

        .catch(error =>  console.log(error) );
}

function iniciarCombate(peticion, infoPokemon) {
    const contenedorMiPokemon = document.getElementById("miPokemon").querySelector(".miPokemon_info");
    const cpuPokemon = document.getElementById("cpuPokemon");

    if (peticion === "user") {
        construirTarjetaPokemon(peticion, infoPokemon, contenedorMiPokemon);

    } else if (peticion === "cpu") {
        construirTarjetaPokemon(peticion, infoPokemon, cpuPokemon);
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