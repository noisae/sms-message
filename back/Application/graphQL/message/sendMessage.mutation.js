const { GraphQLList } = require('graphql')
const MessageType = require('./message.type')
const MessageInputType = require('./message.input.type')

const dependencies = {
  ApiService: require('Domain/Message/ApiService')
}

module.exports = {
  type: MessageType,
  args: {
    message: {
      type: MessageInputType,
      name: 'Message to send'
    }
  },
  resolve: (_, { message }, context, injection) =>
    Object.assign({}, dependencies, injection).ApiService.send({ message }, injection)
}
