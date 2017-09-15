const listMessages = require('./listMessages.query')
const sendMessage = require('./sendMessage.mutation')

module.exports = {
  mutation: { sendMessage },
  queries: { listMessages }
}
