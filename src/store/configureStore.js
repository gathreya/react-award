import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../redux';

export default function configureStore(initialState) {
  const middleware = applyMiddleware(
    thunkMiddleware,
    ReduxPromise
  );
  const middlewarePlusDevTools = (window.devToolsExtension)
    ? compose(middleware, window.devToolsExtension())
    : middleware;

  const store = createStore(
    rootReducer,
    initialState,
    middlewarePlusDevTools
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../redux', () => {
      const nextRootReducer = require('../redux').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}