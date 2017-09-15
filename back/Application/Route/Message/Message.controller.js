const dependencies = {
  ApiService: require('Domain/Message/ApiService'),
  Notify: require('Infra/Notify')
}

const CHANNEL_NAME = 'sms-receive'
const EVENT_NAME = 'SMS_RECEIVE'

const messageController = {
  async webhook (request, injection) {
    const { Notify, ApiService } = Object.assign({}, dependencies, injection)

    const message = await ApiService.save(request.body)

    Notify.notify(CHANNEL_NAME, EVENT_NAME, message)

    return 'Ok'
  }
}

module.exports = messageController
