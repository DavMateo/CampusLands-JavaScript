const persona = {
    nombre: "Dani",
    edad: 30,
    esTrabajador: true,
    familia: ["Miguel", "Maria"],
    direccion: {
        calle: "Calle de los estudiantes",
        numero: 13,
        ciudad: "Bucaramanga"
    },
    caminar: function() {
        console.log(this.nombre + " está caminando");
    }
};

console.log(persona);
console.log(persona.nombre);
persona.caminar();

persona.nombre = "Daniela";
persona.caminar();


console.log(" ");
const cadenaPersona = JSON.stringify(persona);
console.log(cadenaPersona);

console.log(" ");
const objetoPersona = JSON.parse(cadenaPersona);
console.log(objetoPersona);