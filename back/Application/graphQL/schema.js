const { GraphQLObjectType, GraphQLSchema } = require('graphql')

const message = require('./message')

const queries = Object.assign(
  message.queries
)

const mutations = Object.assign(
  {},
  message.mutation
)

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => (queries)
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => (mutations)
  })
})

module.exports = schema
