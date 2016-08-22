'use strict';

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist';
import reducers from '../reducers';

import {AsyncStorage} from 'react-native';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const createNDStore = applyMiddleware(thunk, logger)(createStore);

function configureStore(onComplete: ?() => void) {
  const store = autoRehydrate()(createNDStore)(reducers);
  persistStore(store, {storage: AsyncStorage}, onComplete);
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

export default configureStore;
