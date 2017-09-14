import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'
import ReactTable from 'rc-table'

import './ListMessages.less'

const bem = bemClassName.bind(null, 'list-messages')

const ListMessages = ({ messageCollection }) => {

  const data = messageCollection.messages

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

  return (<ReactTable data={data} columns={columns} className={bem('table')} />)
}

ListMessages.propTypes = {
  messageCollection: PropTypes.object.isRequired,
  loading: PropTypes.bool
}

export default ListMessages
