const url = 'http://localhost:4002'

function requestToServer(queryBody) {
    return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        json: true,
        body: JSON.stringify({
            query: queryBody
        })
    })
    .then(responce => responce.json())
    .then(result => result.data)
    .catch(error => {
        console.log("requestToServer data Error:", error);
        return [];
    });
}

export default requestToServer;