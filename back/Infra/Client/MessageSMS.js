const dependencies = {
  http: require('axios'),
  configuration: require('Infra/config/messagesms')
}

const MessageSMS = {
  handleAuthRequest: (httpPromise) => {
    return httpPromise
      .then(result => result.data)
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
  },

  send ({ message }, injection) {
    const { http, configuration } = Object.assign({}, dependencies, injection)

    if (configuration.forceAuth0User) {
      return Promise.resolve(configuration.forceAuth0User)
    }

    const body = {
      originator: `${message.originator}`,
      body: `${message.body}`,
      recipients: `${message.recipient}`
    }

    const config = {
      headers: {
        'content-type': 'application/json',
        'Authorization': `AccessKey ${configuration.accessKey}`
      },
      json: true
    }
    return MessageSMS.handleAuthRequest(http.post(`${configuration.baseUrl}/messages`, body, config))
  }
}

module.exports = MessageSMS
