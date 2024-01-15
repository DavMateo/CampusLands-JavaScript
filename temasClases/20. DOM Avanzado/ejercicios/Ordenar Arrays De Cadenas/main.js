let lstNombres = [];



function ordenarNombres(lstNombres) {
    return lstNombres.sort();
}

function anexarNombre(lstOrdenada, escribirResultado) {
    const textoReemplazar = escribirResultado;
    console.log(textoReemplazar);
    const nodoTexto = document.createTextNode(lstOrdenada.join("\n"));
    
    if (textoReemplazar.firstChild === null) {
        escribirResultado.appendChild(nodoTexto);

    } else {
        escribirResultado.replaceChild(nodoTexto, escribirResultado.firstChild)
    }
}

function limpiarNombres() {
    const textareaResultado = document.getElementById("resultado");
    const nodoTextoVacio = document.createTextNode("");
    
    textareaResultado.replaceChild(nodoTextoVacio, textareaResultado.firstChild);
    lstNombres = [];
}



function iniciarPrograma() {
    const principal = document.getElementById("principal");
    const formIngresarNombre = principal.querySelector(".ingresarNombre").querySelector(".formulario");
    const textareaResultado = document.getElementById("resultado");
    const formData = new FormData(formIngresarNombre);


    lstNombres.push(formData.get("nombre"));
    let lstOrdenada = ordenarNombres(lstNombres);
    anexarNombre(lstOrdenada, textareaResultado);
}