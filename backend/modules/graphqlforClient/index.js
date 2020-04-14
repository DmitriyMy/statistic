const { mergeResolvers, mergeTypes, fileLoader} = require('merge-graphql-schemas');
const path = require('path');

const types = fileLoader(path.join(__dirname, '/**/**/*.graphql'));
const resolvers = fileLoader(path.join(__dirname, './**/**/*.js'))

module.exports = {
    typeDefs: mergeTypes(types, { all: true }),
    resolvers: mergeResolvers(resolvers, { all: true})
};