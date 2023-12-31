const principal = document.getElementById("principal");
const cuerpoTabla = principal.querySelector(".tabla_body");
const resultados = document.getElementById("resultados");
const facturasDict = new Map();
let contador = 0, cantCobrada = 0, cantPendiente = 0;


// FUNCIONES DE VALIDACIÓN
function validarPrecio(precio) {
    while (true) {
        if (Number(precio) <= 0 || isNaN(Number(precio))) {
            alert("Error, el precio ingresado no es válido. No puede contener letras, caracteres especiales o números negativos. Inténtelo de nuevo.");
        } else {
            break;
        }
    }

    return Number(precio);
}

function validarID(id) {
    while (true) {
        if (Number(id) <= 0 || isNaN(Number(id))) {
            alert("Error, el número de factura ingresado es inválido. No puede contener letras, caracteres especiales o números negativos. Inténtelo de nuevo.");
        } else {
            break;
        }
    }

    return Number(id);
}



// DESARROLLO DEL PROGRAMA
function sumarPrecio(cantidad, tipoSuma) {
    if (tipoSuma === "cobrado") {
        cantCobrada += cantidad;
    } else if (tipoSuma === "pendiente") {
        cantPendiente += cantidad;
    } else {
        console.log(cantPendiente);
        cantPendiente -= cantidad;
        console.log(cantPendiente);
    }
}


function agregarInfoDict(clave, valor) {
    facturasDict.set(clave, valor);
    
    if (facturasDict.size == contador + 1) {
        return true;
    } else {
        return false;
    }
}

function eliminarInfoDict(id) {
    sumarPrecio(facturasDict.get(id), "cobrado");
    console.log(facturasDict.get(id), typeof facturasDict.get(id));
    sumarPrecio(facturasDict.get(id), "pendienteRestar");
    facturasDict.delete(id);
    contador--;

    if (facturasDict.size == contador) {
        return true;
    } else {
        return false;
    }
}

function agregarFactura() {
    let numeroFactura = validarID(prompt("Ingrese el número de la factura: "));
    let precioFactura = validarPrecio(prompt("Ingrese el precio total de la factura: "));
    
    if (agregarInfoDict(numeroFactura, precioFactura)) {
        cuerpoTabla.innerHTML += `
            <tr class="factura${numeroFactura}">
                <td>${numeroFactura}</td>
                <td>${precioFactura}</td>
            </tr>
        `;
    }

    contador++;
    sumarPrecio(precioFactura, "pendiente");
    escribirInfoTabla();
}

function pagarFactura() {
    let idFactura = validarID(prompt("Digite el número de la factura a pagar: "));

    if (eliminarInfoDict(idFactura)) {
        let elementoBorrar = cuerpoTabla.querySelector(`.factura${idFactura}`);
        cuerpoTabla.removeChild(elementoBorrar);
        escribirInfoTabla();
    }
}

function escribirInfoTabla() {
    resultados.innerHTML = `
        <span title="Cantidad de facturas">Cantidad de facturas: ${contador}</span>
        <span title="Cantidad cobrada">Cant. Cobrada: $${cantCobrada} COP</span>
        <span title="Cantidad pendiente de cobro">Cant. Pendiente: $${cantPendiente} COP</span>
    `;
}

escribirInfoTabla();