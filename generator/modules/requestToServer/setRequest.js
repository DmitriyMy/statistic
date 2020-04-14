const url = require('./config/URL');
const bodyGen = require('./bodyGen');
const fetch = require("node-fetch");

function setRequest() {
    const input = bodyGen();
    let queryBody = `mutation {
        setEntity(input: ${input})
      }`;            
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
            console.log("setRequest data Error in fetch:", error);
            return [];
        }); 
}

module.exports = setRequest;