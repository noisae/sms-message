let collection

module.exports = (mongodb) => {
  collection = collection || mongodb && mongodb.collection('messages')
  const MessageRepository = {
    list () {
      return collection
        .find()
        .toArray()
    },
    save ({ message }) {
      return collection
        .insertOne(message).catch((error) => console.log(error))
        .then(_ => message)
    },
    update ({ message }) {
      return collection
        .updateOne({ id: message.id }, { $set: message })
        .then(_ => message)
    }
  }

  return MessageRepository
}
