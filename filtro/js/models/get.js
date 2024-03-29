export function get(url) {
    console.log(url);

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
          .then(response => response.json())
          .then(json => resolve(json))
          .catch(error => reject(error));
    })
}