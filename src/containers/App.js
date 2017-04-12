import React, { Component } from 'react'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className='container'>
        <RaisedButton label="Default" />
        <ul className='nav nav-pills'>
          <li><Link to='/admin'>Админка</Link></li>
          <li><Link to='/list'>Список жанров</Link></li>
        </ul>
       {this.props.children}
       </div>
       </MuiThemeProvider>
    )
  }
}