function mostrarMensaje(nombre, materiales, dimensiones, comentarios) {
    const resultadoTexto = document.getElementById("principal").querySelector(".resultado_texto");
    const nodoTexto = document.createTextNode(`${nombre} ha pedido una caja de ${materiales} con unas dimensiones ${dimensiones.value}. ${comentarios}`);

    resultadoTexto.append(nodoTexto);
}


function iniciarPrograma() {
    const principal = document.getElementById("principal");
    const formulario = principal.querySelector(".formulario");
    const resultadoTexto = principal.querySelector(".resultado_texto");
    const formData = new FormData(formulario);

    let nombre = formData.get("nombre");
    let materiales = formData.get("materiales");
    let comentarios = formData.get("comentarios");

    const calculate = () => {
        const value = document.querySelector("[name=rBtn]:checked");
        return value;
    }

    resultadoTexto.innerHTML = "";
    
    mostrarMensaje(nombre, materiales, calculate(), comentarios);
}