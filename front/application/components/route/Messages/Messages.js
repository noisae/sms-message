import React from 'react'
import { Route } from 'react-router'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'
import Dashboard from 'application/components/layout/Dashboard'
import Tabs from 'application/components/layout/Tabs'
import Tab from 'application/components/layout/Tab'

import ListMessages from 'application/components/route/Messages/ListMessages'
import SendMessages from 'application/components/route/Messages/SendMessage'

const listTab = (<Tab key='0' title='List' action='/messages' />)
const sendTab = (<Tab key='1' title='Send' action='/messages/send' />)
export const messageTabList = (<Tabs tabs={[listTab, sendTab]} />)

class Messages extends React.Component {
  render() {
    return (
      <Dashboard title='Messages' tabs={messageTabList}>
        <Route exact path="/messages" component={ListMessages} />
        <Route exact path="/messages/send" component={SendMessages} />
      </Dashboard>
    )
  }
}

export default Messages
