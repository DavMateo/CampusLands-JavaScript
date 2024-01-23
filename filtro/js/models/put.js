export function put(url, objeto) {
    fetch(url, {
        method: "PUT",
        body: JSON.stringify(objeto),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error("Error!!!: " + error));
}