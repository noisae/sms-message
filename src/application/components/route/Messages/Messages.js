import React from 'react'
import { Route } from 'react-router'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'
import ReactTable from 'rc-table'
import Dashboard from 'components/layout/Dashboard'
import Tabs from 'components/layout/Tabs'
import Tab from 'components/layout/Tab'

import ListMessages from 'components/route/Messages/ListMessages'
import SendMessages from 'components/route/Messages/SendMessage'

const listTab = (<Tab title='List' action='/messages' />)
const sendTab = (<Tab title='Send' action='/messages/send' />)
const messageTabList = (<Tabs tabs={[listTab, sendTab]} />)

export default (
  <Dashboard title='Messages' tabs={messageTabList}>
    <Route exact path="/messages" component={ListMessages} />
    <Route exact path="/messages/send" component={SendMessages} />
  </Dashboard>
)
