export function get(url) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
          .then(response => response.json())
          .then(json => {
            console.log(json);
            resolve(json);
          })
          .catch(error => reject(error));
    })
}