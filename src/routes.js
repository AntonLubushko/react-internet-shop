import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import AddItemPage from './components/AddItemPage'
import List from './components/List'
import Prohibited from './components/Prohibited.js'
import NotFound from './components/NotFound'

export const routes = (
    <div>
    <Route path='/' component={App}>
      <Route path='add-item' component={AddItemPage} />
      <Route path='list' component={List} />
      
    </Route>
    <Route path='prohibited' component={Prohibited} />
    <Route path='*' component={NotFound}/>
    </div>  
)