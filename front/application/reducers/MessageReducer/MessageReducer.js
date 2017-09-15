import ReduceResolver from '../ReduceResolver'

import ListMessagesReducer from './ListMessagesReducer'
import ReceiveMessageReducer from './ReceiveMessageReducer'
import MessageCollection from 'application/entities/MessageCollection'

export const defaultState = {
  messageCollection: new MessageCollection({ messages: [] })
}

const resolvers = [
  ListMessagesReducer,
  ReceiveMessageReducer
]

export default ReduceResolver(defaultState, resolvers)
