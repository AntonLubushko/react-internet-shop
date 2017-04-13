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

function playlists(state = [], action){
    if(action.type === 'ADD_PLAYLIST'){
        return state;
    }else if (action.type === 'DELETE_PLAYLIST') {
        return state;
     }
    return state;
}

// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', '/items/items.json', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  alert( xhr.responseText ); // responseText -- текст ответа.
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