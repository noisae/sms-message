import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const SendMessageMutation = gql`mutation SendMessageMutation($message: MessageInputType) {
  sendMessage(message: $message) {
    id,
    recipient,
    originator,
    body,
    created,
    sended
  }
}`

const SendMessageOptions = {
  props: ({ ownProps, mutate }) => ({
    sendMessage(message) {
      return mutate({
        variables: { message },
        optimisticResponse: {
          message
        }
      })
    }
  })
}

export default graphql(SendMessageMutation, SendMessageOptions)
