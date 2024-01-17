export function get(url) {
    fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error));
}