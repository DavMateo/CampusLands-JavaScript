// async function getNombre(nompoke) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${nompoke}`;

//     const respuesta = await fetch(url);
//     const json = await respuesta.json();

//     console.log(json.sprites.front_default);
// }
// getNombre("bulbasaur");


// Manejo de errores por parte del servidor con ASYNC - AWAIT
async function getNombre(nompoke) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nompoke}`;
    
    const respuesta = await fetch(url);

    // Si la respuesta no fue exitosa
    if (!respuesta.ok) {
        throw new Error("Error. Pokemon no existe");
    }

    const json = await respuesta.json();

    // Retornar el nombre de usuario
    return json.sprites.front_default;
}

// getNombre es una promesa
getNombre("bulbasaur")
    .then(nombre => console.log(nombre))
    .catch(error => console.error(error.message));



// Funciones autodeclaradas que se pueden ejecutar al tiempo de que se declaran
console.log("");
(function saludo() {
    console.log("Hola a todos!");
})();