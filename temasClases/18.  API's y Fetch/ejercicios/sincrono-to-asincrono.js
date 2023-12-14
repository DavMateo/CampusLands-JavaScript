const numeroAleatorio = () => {
    return new Promise((resolve, reject) => {
        resolve(1 + Math.floor(Math.random() * 6));
    });
}

async function doTask(iterations) {
    const numbers = [];

    for (let i = 0; i < iterations; i++) {
        try {
            await numeroAleatorio()
                    .then((numGen) => {
                        if (numGen === 6) {
                            throw new Error("Se ha sacado un 6");
                        } else {
                            numbers.push(numGen);
                        }
                    })
                    
            
        } catch (error) {
            return {
                error: true,
                iter: i+1,
                message: "Se ha sacado un 6"
            }
        }
    }

    return {
        error: false,
        value: numbers
    }
}


doTask(10)
    .then((respuesta) => {
        if (!respuesta.error) {
            console.log(respuesta.value);
        } else {
            console.log(`En la iteración ${respuesta.iter} se ha generado un error: "${respuesta.message}"`);
        }
    });