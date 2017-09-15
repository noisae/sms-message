import MessageCollection from 'application/entities/MessageCollection'
import { EVENT } from 'application/realTime'

const dependencies = { MessageCollection }

const match = (action) => action.type === EVENT.type && action.name === EVENT.name

const execute = ({ messageCollection : { messages } }, { data: message }, injection) => {
  const { MessageCollection} = Object.assign({}, dependencies, injection)

  let newMessages = messages
  if (message) {
    newMessages = Object.assign([], messages)
    newMessages.push(message)
  }
  const messageCollection = new MessageCollection({ messages: newMessages })

  return { messageCollection }
}

export default {
  match,
  execute
}
