const { Entity, validatorAdapter } = require('speck-entity')
const Joi = require('joi')
const adapter = validatorAdapter('joi', require('joi'))
const uuidv4 = require('uuid/v4')

class Message extends Entity {}

Message.SCHEMA = {
  id: {
    validator: adapter(Joi.string().guid()),
    builder: (value) => {
      if (!value) {
        return uuidv4()
      }

      return value
    }
  },
  recipient: adapter(Joi.number()),
  originator: adapter(Joi.number()),
  body: adapter(Joi.string()),
  created: {
    validator: adapter(Joi.object().type(Date)),
    type: Date,
    builder: (value) => {
      if (typeof value === 'number') {
        return new Date(value)
      }

      return value
    }
  },
  sended: {
    validator: adapter(Joi.object().type(Date)),
    type: Date,
    builder: (value) => {
      if (typeof value === 'number') {
        return new Date(value)
      }

      return value
    }
  }
}

module.exports = Message
