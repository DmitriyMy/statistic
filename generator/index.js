const {ApolloServer} = require('apollo-server-express');
const express = require('express');
const setRequest = require('./modules/requestToServer/setRequest');

const DECLARED_PORT = 4001;
const port = process.env.PORT || DECLARED_PORT;

const app = express();

app.use(express.json());

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen({port: DECLARED_PORT}, () =>
    console.log(`🚀 Server ready at http://localhost:${DECLARED_PORT}`)
);

(function emulatorServer() {
    setInterval(() => setRequest(), 100)
})()

//Error handler
app.use(function (err, req, res, next) {
    if (err.statusCode && err.statusCode !== 500) {
        console.log('Response Code:', req.ip, err.statusCode);
        return res.sendStatus(err.statusCode);
    } else {
        console.error(req.ip, err);
        return res.sendStatus(500);
    }
});