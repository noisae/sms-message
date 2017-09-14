import MessageCollection from 'application/entities/MessageCollection'

const dependencies = { Message, MessageCollection }

const match = (action) => action.type === 'APOLLO_QUERY_RESULT' && action.operationName === 'ListMessagesQuery'

const execute = (state, { result }, injection) => {
  const { Message, MessageCollection} = Object.assign({}, dependencies, injection)
  const { listMessages: messages } = result.data

  if (messages && messages.length > 0) {
    state.messageCollection = new MessageCollection({ messages })
  }

  return state
}

export default {
  match,
  execute
}
