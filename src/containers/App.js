import React, { Component } from 'react'
import { Link } from 'react-router'
//import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Avatar from 'material-ui/Avatar';
import SvgIcon from 'material-ui/SvgIcon';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleDrawer() {this.setState({ open: !this.state.open });}
  
  render() {
    return (
      <div>
        <AppBar
          iconElementLeft= {<img src='logo.png'  style={{width:50,height:50}}/>}
          onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
        />
        <Drawer
          docked={false}
          width={300}
          onRequestChange={this.toggleDrawer.bind(this)}
          open={this.state.open}
        >
          <MenuItem primaryText="list" containerElement={<Link to="/list" />} />
          <MenuItem primaryText="admin" containerElement={<Link to="/admin" />} />
        </Drawer>
        <div >
          {this.props.children}
          
        </div>
      </div>
       
    )
  }
}