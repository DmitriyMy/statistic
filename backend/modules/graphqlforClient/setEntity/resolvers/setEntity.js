const { ApolloError } = require('apollo-server-express');
const {Entity} = require('../../../database/models/Entity');

function setEntity(args) {
    return Entity.findOneAndUpdate({ID: args.input.ID}, args.input, { new: true, runValidators: true })
        .then(result => {
            if (result) return true;
        })
    .catch(error => {
        throw new ApolloError(`setEntity ${error}`, {
            timestamp: Date()
          });
    });
}

module.exports = {
    Mutation: {
        setEntity: (parent, args ,context) =>
            setEntity(args, context)
    }
}