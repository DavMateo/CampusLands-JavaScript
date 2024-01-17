export function patch(url, objeto) {
    fetch(url, {
        method: "PATCH",
        body: JSON.stringify(objeto),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error("Error!!!: " + error));
}