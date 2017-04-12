import 'babel-polyfill'
import React from 'react'
import { Router, browserHistory } from 'react-router'
import { routes } from './routes'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {render} from 'react-dom'


function playlists(state = [], action){
    if(action.type === 'ADD_PLAYLIST'){
        return state;
    }else if (action.type === 'DELETE_PLAYLIST') {
        return state;
     }
    return state;
}

const store = createStore(playlists,applyMiddleware(thunk));

render(
  <Provider store={store}>
   
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);