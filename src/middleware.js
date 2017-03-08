import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import serialize from 'serialize-javascript';
import routes from './routes';
import initialState from './reducers/initialState';
import { routerReducer } from 'react-router-redux';
import content from './reducers/contentReducer';

// Load json
const contentJSON = require('./data/content.json');

export default (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    let combined = combineReducers({
      content,
      routing: routerReducer,
    });

    let contentState = {
      ...initialState,
      content: {
        ...contentJSON,
        activeSlide: 1,
        collapsed: false,
      },
    };

    let store = createStore(combined, { ...contentState }, applyMiddleware(thunk));

    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      if (process.env.NODE_ENV == 'development') {
        res.status(200).send(`
          <!doctype html>
          <html>
            <header>
              <title>Test - iPad</title>
            </header>
            <body>
              <div id='app'></div>
              <script type='text/javascript'>
                ${store && `window.__INITIAL_STATE__=${serialize(store.getState())}`}
              </script>
              <script src='/bundle.js' defer></script>
            </body>
          </html>
          `);
      } else if (process.env.NODE_ENV == 'production') {
        res.status(200).send(`
          <!doctype html>
          <html>
            <header>
              <title>Test - iPad</title>
              <link rel='stylesheet' href='/bundle.css'>
            </header>
            <body>
              <div id='app'>${renderToString(
                <Provider store={store}>
                  <RouterContext {...renderProps} />
                </Provider>
              )}</div>
              <script type='text/javascript'>
                ${store && `window.__INITIAL_STATE__=${serialize(store.getState())}`}
              </script>
              <script src='/bundle.js'></script>
            </body>
          </html>
        `);
      }
    } else {
      res.status(404).send('Not found');
    }
  });
};
