import { routerReducer } from 'react-router-redux'

import MessageReducer from 'application/reducers/MessageReducer'

export default {
  routing: routerReducer,
  messageReducer: MessageReducer
}
