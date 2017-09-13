import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

import storeReducers from './storeReducers'
import Routes from './routes'

import 'application/styles/base.less'

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://',
  }),
})

const renderApplication = () => {
  const applicationDOMElement = document.getElementById('app')
  const applicationElement = (
    <ApolloProvider client={apolloClient} store={storeReducers(apolloClient)}>
      <Routes />
    </ApolloProvider>
  )

  ReactDOM.render(applicationElement, applicationDOMElement)
}

const rootInstance = renderApplication()

if (module.hot) {
  module.hot.accept({
    getRootInstances: () => ([ rootInstance ])
  })
}
