const { ApolloError } = require('apollo-server-express');
const {Entity} = require('../../../database/models/Entity');

function getUser({ ID }) {
    return Entity.findOne({ 'ID': ID }).catch(error => {
        throw new ApolloError(`getEntity ${error}`, {
            timestamp: Date()
          });
    });
}

module.exports = {
    Query: {
        getUser: (parent, args ,context) =>
            getUser(args, context)
    }
}