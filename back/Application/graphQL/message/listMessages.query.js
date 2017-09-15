const { GraphQLList, GraphQLBoolean } = require('graphql')
const MessageType = require('./message.type')

const dependencies = {
  ApiService: require('Domain/Message/ApiService')
}

module.exports = {
  type: new GraphQLList(MessageType),
  resolve: (_, __, ___, injection) => {
    const { ApiService } = Object.assign({}, dependencies, injection)

    return ApiService.list()
  }
}
