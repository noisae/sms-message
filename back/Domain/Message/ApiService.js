const dependencies = {
  MessageRepository: require('Infra/Repository/Message')(),
  MessageSMSClient: require('Infra/Client/MessageSMS'),
  MessageEntity: require('Domain/Message/Entity/Message')
}

const ApiService = {
  list (injection) {
    const { MessageRepository } = Object.assign({}, dependencies, injection)
    return MessageRepository.list()
  },
  async send ({ message }, injection) {
    const { MessageRepository, MessageEntity, MessageSMSClient } = Object.assign({}, dependencies, injection)
    const messageEntity = new MessageEntity(message)

    messageEntity.created = new Date()
    await MessageRepository.save({ message: messageEntity })
    await MessageSMSClient.send({ message: messageEntity })

    messageEntity.sended = new Date()
    await MessageRepository.update({ message: messageEntity })

    return messageEntity
  },
  save ({ body, recipient, originator, createdDatetime, date_utc }, injection) {
    const { MessageRepository, MessageEntity, MessageSMSClient } = Object.assign({}, dependencies, injection)
    const messageEntity = new MessageEntity({
      recipient,
      originator,
      body
    })

    messageEntity.created = new Date(createdDatetime)
    messageEntity.sended =  new Date(date_utc * 1000)

    return MessageRepository.save({ message: messageEntity })
  }
}

module.exports = ApiService
