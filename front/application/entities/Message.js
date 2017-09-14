import { Entity, validatorAdapter } from 'speck-entity'
import Joi from 'joi'
const adapter = validatorAdapter('joi', Joi)

class Message extends Entity {

  static SCHEMA = {
    id: adapter(Joi.number()),
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
    }
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

  toJSON() {
    const jsonResult = super.toJSON()

    return Object.assign({}, jsonResult, { key: this.key })
  }

  get key() {
    return this.id
  }

  get __typename() {
    return 'Message'
  }
}

export default Message
