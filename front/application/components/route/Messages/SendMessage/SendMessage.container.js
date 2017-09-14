import { compose } from 'react-apollo'

import SendMessage from './SendMessage'
import SendMessageMutation from './SendMessage.mutation'
import SendMessageRedux from './SendMessage.redux'

const SendMessageContainer = compose(
  SendMessageMutation,
  SendMessageRedux
)(SendMessage)

export default SendMessageContainer
