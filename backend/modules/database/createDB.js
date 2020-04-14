const {Entity} = require('./models/Entity');
const connectDataBase = require('./connection');

(function createBD() {
    connectDataBase()
    .then(result => {
        for (let i = 1; i < 21; i++) {
            let entity =  new Entity();
            let body = {ID: `Entity ${[i]}`};
            entity.createEntity(body);
        }
    }).catch(error => {
        console.log("createBD error:", error);
        return [];
    });
})();