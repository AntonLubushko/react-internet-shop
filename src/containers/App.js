import React, { Component } from 'react'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Menue from '../components/Menue'

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      
      <div className='container'>
       <Menue/>
        <div>
          <ul className='nav nav-pills'>
            <li><Link to='/admin'>Админка</Link></li>
            <li><Link to='/list'>Список жанров</Link></li>
          </ul>
        {this.props.children}
        </div>
       </div>
       </MuiThemeProvider>
    )
  }
}