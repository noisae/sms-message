import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'
import ReactTable from 'rc-table'

import './ListMessages.less'

const bem = bemClassName.bind(null, 'list-messages')

const ListMessages = ({ messageCollection }) => {

  const data = [{
    key: 1,
    recipient: 5511998488996,
    originator: 5511998488996,
    body: 'Tanner Linsley',
    createdDatetime: 123456869595
  }]

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
    title: 'Date',
    key: 'createdDatetime',
    dataIndex: 'createdDatetime'
  }]

  return (<ReactTable data={data} columns={columns} className={bem('table')} />)
}

ListMessages.propTypes = {
  messageCollection: PropTypes.object
}

export default ListMessages
