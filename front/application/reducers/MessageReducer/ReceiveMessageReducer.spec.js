import { expect } from 'chai'

import { EVENT } from 'application/realTime'
import MessageCollection from 'application/entities/MessageCollection'
import Message from 'application/entities/Message'
import ReceiveMessageReducer from './ReceiveMessageReducer'

describe('Receive Message Reducer', () => {
  it('Matchs the reducer', () => {
    const action = { type: EVENT.type, name: EVENT.name }
    const result = ReceiveMessageReducer.match(action)

    expect(result).to.equal(true)
  })

  it('Executes the Reducer', () => {
    const state = { messageCollection: new MessageCollection() }
    const message = new Message()
    const action = { data: message }
    const result = ReceiveMessageReducer.execute(state, action)

    expect(result.messageCollection).to.be.instanceOf(MessageCollection)
    expect(result.messageCollection.messages[0]).to.be.deep.equal(message)
  })
})
