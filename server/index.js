const {ApolloServer} =  require('apollo-server');
const {typeDefs} = require('./schema/type-defs');
const {resolvers} = require('./schema/resolvers');


//apollo server is the most popular graphql server library
//every piece of data exists inside typeDefs
//every function in graphql is enclosed inside resolvers
const server = new ApolloServer({typeDefs, resolvers, context: () => {
    return {name: 'Pedro'}
}})

server.listen().then((url) => {
    console.log(`YOUR API IS RUNNING AT ${url}`)
});