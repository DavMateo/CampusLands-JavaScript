// function getNombre(nomusu) {
//     const url = `https://api.github.com/users/${nomusu}`;

//     // Fetch es una promesa
//     fetch(url) 
//         .then(respuesta => respuesta.json())
//         .then(json => {
//             console.log(json.name);
//         })
//         .catch((err) => console.error("No existe. " + err.message));
// }

// getNombre("");


async function getNombre(nompoke) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nompoke}`;

    const respuesta = await fetch(url);
    // const json = await respuesta.json();

    console.log(respuesta);
}

getNombre("ditto");