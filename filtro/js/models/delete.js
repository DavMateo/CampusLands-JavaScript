export function delet(url) {
    fetch(url, {
        method: "DELETE",
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error("Error!!!: " + error));
}