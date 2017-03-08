import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducers from './reducers';
import routes from './routes';
import initialState from './reducers/initialState';
import content from './reducers/contentReducer';

// Styles
if (process.env.WEBPACK) require('./styles/styles.scss'); // eslint-disable-line global-require

const store = createStore(reducers, window.__INITIAL_STATE__, applyMiddleware(thunk)); // eslint-disable-line no-underscore-dangle
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('app'));

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default); // eslint-disable-line global-require
  });
}
