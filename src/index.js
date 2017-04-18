/**
This is the entry file for the application
*/
import 'babel-polyfill';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { routes } from './routes';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducer from './reducers/items';

injectTapEventPlugin()

// Redux-store
const store = createStore(reducer,applyMiddleware(thunk));

render(
  <MuiThemeProvider>
  <Provider store={store}>
   <Router history={browserHistory} routes={routes} />
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);