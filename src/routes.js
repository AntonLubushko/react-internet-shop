import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import AddItemPage from './components/AddItemPage'
import List from './components/List'
import Home from './components/Home'
import NotFound from './components/NotFound'


export const routes = (
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='add-item' component={AddItemPage} />
      <Route path='list' component={List} />
    </Route>
      
)