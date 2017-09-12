import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import Routes from './routes'

import 'application/styles/base.less'

const renderApplication = () => {
  const applicationDOMElement = document.getElementById('app')
  const applicationElement = ( <Routes /> )

  ReactDOM.render(applicationElement, applicationDOMElement)
}

const rootInstance = renderApplication()

if (module.hot) {
  module.hot.accept({
    getRootInstances: () => ([ rootInstance ])
  })
}
