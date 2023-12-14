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
(async function() {
    try {
        let urlImg = await getNombre("pikachu");
        console.log(urlImg);

        urlImg = await getNombre("limber");
        console.log(urlImg);
    } catch (error) {
        console.error(error.message);
    }
})();