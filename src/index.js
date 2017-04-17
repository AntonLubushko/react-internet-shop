import 'babel-polyfill'
import React from 'react'
import { Router, browserHistory } from 'react-router'
import { routes } from './routes'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

let localStorage = global.window.localStorage;
function populate(){
  if(localStorage.goods === undefined||localStorage.goods.length<3){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/items/items.json', false);
    xhr.send();
    if (xhr.status != 200) {
      console.log( xhr.status + ': ' + xhr.statusText ); 
    } else {
      localStorage.goods = xhr.responseText;
    }
  }
  let array = JSON.parse(localStorage.goods);
  localStorage.max = Math.max(...array.map(elem =>elem.id));
  let count = array.length;
  let totalCost = array.reduce((total,elem) => total+Number(elem.price),0);
  let avg = (totalCost/count).toFixed(2);
  return [count,totalCost,avg];
}

function calculate(){
  let array = JSON.parse(localStorage.goods);
  let count = array.length;
  let totalCost = array.reduce((total,elem) => total+Number(elem.price),0);
  let avg =(count !== 0)?(totalCost/count).toFixed(2):0;
  return [count,totalCost,avg];
}

function playlists(state = populate(), action){
    if(action.type === 'ADD_ITEM'){
      return calculate();
    }else if (action.type === 'DELETE_ITEM') {
      
      return calculate();
     }
    return state;
}

const store = createStore(playlists,applyMiddleware(thunk));

render(
  <MuiThemeProvider>
  <Provider store={store}>
   <Router history={browserHistory} routes={routes} />
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);