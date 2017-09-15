const { GraphQLString, GraphQLNonNull, GraphQLInputObjectType } = require('graphql')
const TimestampType = require('./timestamp.type')

const MessageInputType = new GraphQLInputObjectType({
  name: 'MessageInputType',
  description: 'Type to send a new message',
  fields: () => ({
    recipient: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The agent of message'
    },
    originator: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The case of message'
    },
    body: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Channel Account identifier'
    }
  })
})

module.exports = MessageInputType
