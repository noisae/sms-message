import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

export default function configureStoreAndReducers(apolloClient) {

  return createStore(
    combineReducers({
      apollo: apolloClient.reducer(),
    }),
    {}, // initial state
    compose(
        applyMiddleware(apolloClient.middleware()),
        // If you are using the devToolsExtension, you can add it here also
        (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
  )
}
