import { expect } from 'chai'

import MessageCollection from 'application/entities/MessageCollection'
import Message from 'application/entities/Message'
import ListMessagesReducer from './ListMessagesReducer'

describe('List Messages Reducer', () => {
  it('Matchs the reducer', () => {
    const action = { type: 'APOLLO_QUERY_RESULT', operationName: 'ListMessagesQuery'}
    const result = ListMessagesReducer.match(action)

    expect(result).to.equal(true)
  })

  it('Executes the Reducer', () => {
    const state = { messageCollection: new MessageCollection() }
    const message = new Message()
    const action = { data: { listMessages: [message] } }
    const result = ListMessagesReducer.execute(state, { result: action })

    expect(result.messageCollection).to.be.instanceOf(MessageCollection)
    expect(result.messageCollection.messages[0]).to.be.deep.equal(message)
  })
})
