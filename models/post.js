export function post(url, objeto) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method:"POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(objeto),
        })
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => reject(error));
    });
}