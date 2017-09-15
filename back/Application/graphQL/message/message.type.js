const { GraphQLString, GraphQLObjectType } = require('graphql')
const TimestampType = require('./timestamp.type')

const MessageType = new GraphQLObjectType({
  name: 'Message',
  description: 'SMS Message',
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        description: 'The identifier of message'
      },
      __typename: {
        type: GraphQLString,
        description: 'Type of record',
        resolve: () => 'Message'
      },
      recipient: {
        type: GraphQLString,
        description: 'The agent of message'
      },
      originator: {
        type: GraphQLString,
        description: 'The case of message'
      },
      body: {
        type: GraphQLString,
        description: 'The Channel Account identifier'
      },
      created: {
        type: TimestampType,
        description: 'The timestamp of created at date'
      },
      sended: {
        type: TimestampType,
        description: 'The timestamp of published date'
      }
    }
  }
})

module.exports = MessageType
