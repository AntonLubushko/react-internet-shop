/**
  Page with routes
*/
import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import AddItem from './components/AddItem';
import List from './components/List';
import Prohibited from './components/Prohibited.js';
import NotFound from './components/NotFound';

export const routes = (
    <div>
    <Route path='/' component={App}>
      <Route path='add' component={AddItem} />
      <Route path='list' component={List} />
    </Route>
    <Route path='prohibited' component={Prohibited} />
    <Route path='*' component={NotFound}/>
    </div>  
)