import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route, Redirect, IndexRoute, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Messages from 'components/route/Messages'

const history = createBrowserHistory()

export default () => (
  <Router history={history}>
    <Switch>
      <Messages />
      <Redirect from="*" to="/messages" />
    </Switch>
  </Router>
)
