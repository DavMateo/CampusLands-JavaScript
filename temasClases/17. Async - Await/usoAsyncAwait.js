let datos = [
    {
        id: 1,
        title: "Iron Man",
        year: 2008
    },
    {
        id: 2,
        title: "Spiderman: HomeComing",
        year: 2017
    },
    {
        id: 3,
        title: "Avengers: Endgame",
        year: 2019
    }
];


datos = [];
const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error("Error. No existen datos."));
        }

        setTimeout(() => {
            resolve(datos);
        }, 1500);
    });
}

async function obtenerDatos() {
    try {
        const datosObtenidos = await getDatos();
        console.table(datosObtenidos);
    } catch (error) {
        console.error(error.message);
    }
}
obtenerDatos();