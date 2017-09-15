const configuration = require('Infra/config/notify')
const Pusher = require('pusher')
const dependencies = {
  pusher: new Pusher({
    appId: configuration.appId,
    key: configuration.key,
    secret: configuration.secret,
    cluster: 'us2',
    encrypted: true
  })
}

module.exports = {
  notify: (channel, event, object, injection) => {
    const { pusher } = Object.assign({}, dependencies, injection)

    return new Promise((resolve, reject) => {
      pusher.trigger(channel, event, object,
        (err) => {
          if (err) {
            return reject(err)
          }

          return resolve()
        })
    })
  }
}
