import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const ListMessagesQuery = gql`query ListMessagesQuery {
  listMessages {
    id,
    recipient,
    originator,
    body',
    createdDatetime
  }
}`

const ListMessagesOptions = {
  options: () => ({ forceFetch: true }),
  props ({ ownProps, data: { loading, error } }) {
    return {
      ...ownProps,
      loading,
      error
    }
  }
}

export default graphql(ListMessagesQuery, ListMessagesOptions)
