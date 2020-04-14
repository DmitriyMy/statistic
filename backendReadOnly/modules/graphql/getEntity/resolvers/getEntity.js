const { ApolloError } = require('apollo-server-express');
const {Entity} = require('../../../database/models/Entity');

function getEntity({ ID }) {
    return Entity.findOne({ 'ID': ID }).catch(error => {
            throw new ApolloError(`getEntity ${error}`, {
                timestamp: Date()
              });
        });
}

module.exports = {
    Query: {
        getEntity: (parent, args ,context) =>
            getEntity(args, context)
    }
}