const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const schema = require('Application/graphQL/schema')

module.exports = (app) => {
  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }))
  app.use('/graphiql', bodyParser.json(), graphiqlExpress({ endpointURL: '/graphql' }))
}
