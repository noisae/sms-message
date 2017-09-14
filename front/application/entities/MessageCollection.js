import { Entity, validatorAdapter } from 'speck-entity'
import Joi from 'joi'
const adapter = validatorAdapter('joi', Joi)

class MessageCollection extends Entity {

  static SCHEMA = {
    messages: adapter(Joi.array().items(Joi.object().type(Message)))
  }

  get __typename() {
    return 'MessageCollection'
  }

}

export default MessageCollection
