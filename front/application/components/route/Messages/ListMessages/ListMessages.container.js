import { compose } from 'react-apollo'

import ListMessages from './ListMessages'
import ListMessagesQuery from './ListMessages.query'
import ListMessagesRedux from './ListMessages.redux'

const ListMessagesContainer = compose(
  ListMessagesQuery,
  ListMessagesRedux
)(ListMessages)

export default ListMessagesContainer
