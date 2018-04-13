const { GraphQLServer } = require('graphql-yoga')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: () => ({})
})

const serverOptions = {
  port: 8000,
  endpoint: '/graphql',
  playground: '/playground'
}

server.start(serverOptions, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
)
