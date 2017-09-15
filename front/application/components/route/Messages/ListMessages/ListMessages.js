import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'
import ReactTable from 'rc-table'
import Loader from 'components/layout/Loader'

import './ListMessages.less'

const bem = bemClassName.bind(null, 'list-messages')

class ListMessages extends React.Component {

  static propTypes = {
    messageCollection: PropTypes.object.isRequired,
    loading: PropTypes.bool
  }

  render() {
    if (this.props.loading) {
      return (<Loader />)
    }

    const { messageCollection, loading } = this.props
    const data = messageCollection && messageCollection.messages.map((message) => message.toJSON())

    const columns = [{
      title: 'Recipient',
      key: 'recipient',
      dataIndex: 'recipient'
    },{
      title: 'Originator',
      key: 'originator',
      dataIndex: 'originator'
    },{
      title: 'Body',
      key: 'body',
      dataIndex: 'body'
    },{
      title: 'Created',
      key: 'created',
      dataIndex: 'created'
    },{
      title: 'Sended',
      key: 'sended',
      dataIndex: 'sended'
    }]

    return (<ReactTable data={data.reverse()} columns={columns} className={bem('table')} />)
  }
}

export default ListMessages
