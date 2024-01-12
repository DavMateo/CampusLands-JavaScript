function obtenerInfo(url) {
    return new Promise((resolve, reject) => {
        try { resolve(fetch(url)) } 
        catch (error) { reject(error) }
    });
}

function convertirToJson(res) {
    console.log(res);

    return new Promise((resolve, reject) => {
        try {
            resolve(res.json());

        } catch (error) {
            reject(error);
        }
    });
}


function construirEstructuraHtml(resultadoApi, elemHtml) {
    console.log(resultadoApi);

    for (let i = 0; i < resultadoApi.length; i++) {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const pName = document.createElement("p");
        const pStatus = document.createElement("p");

        div.classList.add("target");
        img.classList.add("target_img");
        pName.classList.add("target_name");
        pStatus.classList.add("target_status");

        img.setAttribute("src", resultadoApi[i].image);

        pName.textContent = resultadoApi[i].name;
        pStatus.textContent = resultadoApi[i].status;

        div.appendChild(img);
        div.appendChild(pName);
        div.appendChild(pStatus);
        elemHtml.appendChild(div);
    }
}

function escribirInfoHtml() {

}


function iniciarPrograma() {
    const main = document.querySelector("main");

    obtenerInfo("https://rickandmortyapi.com/api/character")
        .then ((respuesta) => {
            convertirToJson(respuesta)
                .then ((resultado) => {
                    const lstResultadoApi = resultado.results;
                    construirEstructuraHtml(lstResultadoApi, main);
                })

                .catch ((error) => {
                    console.error(error);
                });
        })

        .catch ((error) => {
            console.error(error);
        });
}

iniciarPrograma();