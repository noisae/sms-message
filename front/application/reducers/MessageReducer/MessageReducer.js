import ReduceResolver from '../ReduceResolver'

import ListMessagesReducer from './ListMessagesReducer'
import MessageCollection from 'application/entities/MessageCollection'

export const defaultState = {
  messageCollection: new MessageCollection({ messages: [] })
}

const resolvers = [
  ListMessagesReducer
]

export default ReduceResolver(defaultState, resolvers)
