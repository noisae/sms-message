import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers'

export default function configureStoreAndReducers(apolloClient) {
  const reducers = combineReducers(Object.assign({ apollo: apolloClient.reducer() }, rootReducer))

  const middleware = compose(
      applyMiddleware(apolloClient.middleware()),
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )

  return createStore(reducers, {}, middleware)
}
