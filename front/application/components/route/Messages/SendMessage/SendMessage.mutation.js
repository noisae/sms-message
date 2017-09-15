import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import uuidv4 from 'uuid/v4'

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
          sendMessage: {
            ...message,
            id: uuidv4(),
            created: new Date(),
            sended: new Date(),
            __typename: 'Message'
          }
        }
      })
    }
  })
}

export default graphql(SendMessageMutation, SendMessageOptions)
