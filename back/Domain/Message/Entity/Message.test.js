const { expect } = require('chai')

const MessageEntity = require('Domain/Message/Entity/Message')

const MessageEntityFixture = require('Features/Fixtures/Message.fixture')

describe('Message Entity', () => {
  describe('#SCHEMA', () => {
    const rawArguments = MessageEntityFixture.build()
    const messageEntity = new MessageEntity(rawArguments)

    it('has an id', () => expect(messageEntity.id).to.equal(rawArguments.id))
    it('has a recipient', () => expect(messageEntity.recipient).to.equal(rawArguments.recipient))
    it('has a originator', () => expect(messageEntity.originator).to.equal(rawArguments.originator))
    it('has a body', () => expect(messageEntity.body).to.equal(rawArguments.body))
    it('has a created', () => expect(messageEntity.created).to.equal(rawArguments.created))
    it('has a sended', () => expect(messageEntity.sended).to.equal(rawArguments.sended))
  })
})
