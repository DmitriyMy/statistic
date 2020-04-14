const { ApolloError } = require('apollo-server-express');
const {Entity} = require('../../../database/models/Entity');

function getEntities() {
    return Entity.find().catch(error => {
            throw new ApolloError(`getEntities ${error}`, {
                timestamp: Date()
            });
        });
}

module.exports = {
    Query: {
        getEntities: (parent, args ,context) =>
            getEntities(args, context)
    }
}