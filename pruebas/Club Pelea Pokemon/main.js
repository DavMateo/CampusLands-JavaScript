const botonFight = document.getElementById("btnFight");
const miPokemonBtn = document.getElementById("miPokemon_btn");
const dictPokemonUser = new Map();
const dictPokemonCpu = new Map();
let isFight = false;
let isReady = false;


miPokemonBtn.addEventListener("click", (e) => {
    isReady = true;
    elegirPokemon(true, false);
});


function buscarPokemon() {
    const numAleatorio = Math.floor(Math.random() * (806 - 1 + 1) + 1);
    return getPokemon(numAleatorio);
}

async function construirTarjetaPokemon(elemento, atributos, checked = true) {
    if (checked) {
        elemento.innerHTML = `
            <button id="cpuPokemon_btn">CPU Pokemon</button>

            <div id="cpuPokemon_infoContainer">
                <div class="pokemonImg">
                    <img src="${atributos.imagen}" alt="imagen_${atributos.nombre}" width="150px" />
                </div>

                <br/>

                <p class="pokemon_textInfo">Name: ${atributos.nombre}</p>
                <p class="pokemon_textInfo">${atributos.caracteristicas[0][0]}: ${atributos.caracteristicas[0][1]}</p>
                <p class="pokemon_textInfo">${atributos.caracteristicas[1][0]}: ${atributos.caracteristicas[1][1]}</p>
                <p class="pokemon_textInfo">${atributos.caracteristicas[2][0]}: ${atributos.caracteristicas[2][1]}</p>
                <p class="pokemon_textInfo">${atributos.caracteristicas[3][0]}: ${atributos.caracteristicas[3][1]}</p>
            </div>
        `;

    } else {
        elemento.innerHTML = `
            <div class="pokemonImg">
                <img src="${atributos.imagen}" alt="imagen_${atributos.nombre}" width="150px" />
            </div>

            <br/>

            <p class="pokemon_textInfo">Name: ${atributos.nombre}</p>
            <p class="pokemon_textInfo">${atributos.caracteristicas[0][0]}: ${atributos.caracteristicas[0][1]}</p>
            <p class="pokemon_textInfo">${atributos.caracteristicas[1][0]}: ${atributos.caracteristicas[1][1]}</p>
            <p class="pokemon_textInfo">${atributos.caracteristicas[2][0]}: ${atributos.caracteristicas[2][1]}</p>
            <p class="pokemon_textInfo">${atributos.caracteristicas[3][0]}: ${atributos.caracteristicas[3][1]}</p>
        `;
    }
}

async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch(url);
    const respuestaJson = await respuesta.json();


    return new Promise((resolve, reject) => {
        if (respuesta.ok) {
            resolve({
                nombre: respuestaJson.name,
                imagen: respuestaJson.sprites.other["official-artwork"].front_default,
                caracteristicas: [
                    [respuestaJson.stats[0].stat.name, respuestaJson.stats[0].base_stat],
                    [respuestaJson.stats[1].stat.name, respuestaJson.stats[1].base_stat],
                    [respuestaJson.stats[2].stat.name, respuestaJson.stats[2].base_stat],
                    [respuestaJson.stats[5].stat.name, respuestaJson.stats[5].base_stat]
                ],
                experienciaBase: respuestaJson.base_experience
            });

        } else {
            reject("Ha ocurrido un error al intentar obtener la información del servidor. Recargue la página e inténtelo de nuevo.");
        }

    });
}


async function elegirPokemon() {
    buscarPokemon()
        .then((respuesta) => {
            const miPokemon = document.getElementById("miPokemon_infoContainer");
            construirTarjetaPokemon(miPokemon, respuesta, false);

            //Construir diccionario
            dictPokemonUser.set("imagen", respuesta.imagen);
            dictPokemonUser.set("nombre", respuesta.nombre);
            dictPokemonUser.set(respuesta.caracteristicas[0][0], respuesta.caracteristicas[0][1]);
            dictPokemonUser.set(respuesta.caracteristicas[1][0], respuesta.caracteristicas[1][1]);
            dictPokemonUser.set(respuesta.caracteristicas[2][0], respuesta.caracteristicas[2][1]);
            dictPokemonUser.set(respuesta.caracteristicas[3][0], respuesta.caracteristicas[3][1]);
        })

        .catch((error) => {
            console.error(error);
        });
}

function cpuElegir() {
    if (isFight && isReady) {
        for (let i = 0; i < 7; i++) {
            buscarPokemon()
                .then((respuesta) => {
                    const cpuPokemon = document.getElementById("cpuPokemon");
                    construirTarjetaPokemon(cpuPokemon, respuesta);

                    //Construir diccionario
                    dictPokemonCpu.set("imagen", respuesta.imagen);
                    dictPokemonCpu.set("nombre", respuesta.nombre);
                    dictPokemonCpu.set(respuesta.caracteristicas[0][0], respuesta.caracteristicas[0][1]);
                    dictPokemonCpu.set(respuesta.caracteristicas[1][0], respuesta.caracteristicas[1][1]);
                    dictPokemonCpu.set(respuesta.caracteristicas[2][0], respuesta.caracteristicas[2][1]);
                    dictPokemonCpu.set(respuesta.caracteristicas[3][0], respuesta.caracteristicas[3][1]);
                })

                .catch((error) => {
                    console.error(error);
                });
        }
    } else {
        alert("Debes elegir primero a tu pokemón.");
    }
}

botonFight.addEventListener("click", async (e) => {
    isFight = true;

    setTimeout(() => {
        cpuElegir();
    }, 1000);

    iniciarCombate();
});


async function iniciarCombate() {
    console.log(await dictPokemonUser.get("nombre"));
    console.log(await dictPokemonCpu.get("nombre"));
    console.log(dictPokemonUser);
    console.log(dictPokemonCpu);
}