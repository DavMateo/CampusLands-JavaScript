export function patch(url, objeto) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "PATCH",
            body: JSON.stringify(objeto),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
          .then(response => response.text())
          .then(data => resolve(data))
          .catch(error => reject("Error!!!: " + error));
    });
}