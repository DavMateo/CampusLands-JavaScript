export function post(url, objeto) {
    fetch(url, {
        method:"POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(objeto),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
}