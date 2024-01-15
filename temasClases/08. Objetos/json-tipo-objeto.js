const objeto = {
    "empleados": [
        {
            "nombre": "Juan Pérez",
            "apellido": "López",
        },
        {
            "nombre": "Ana",
            "apellido": "González",
        },
        {
            "nombre": "Pedro",
            "apellido": "Sánchez",
        }
    ],

    nombreCompleto: function() {
        for (i = 0; i < this.empleados.length; i++) {
            console.log(this.empleados[i].nombre + " " + this.empleados[i].apellido);
        }
    },

    nombreCompletoPosicion: function(pos) {
        console.log(this.empleados[pos].nombre + " " + this.empleados[pos].apellido);
    }
}

console.log(objeto.empleados[2].apellido);
console.log("");

console.log(objeto.nombreCompleto());
console.log("");