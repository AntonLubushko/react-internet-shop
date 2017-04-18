/**
  App page is a container for all pages, it also contains header and footer
  route: /
*/

import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Footer from '../components/Footer';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleDrawer() {this.setState({ open: !this.state.open });}
  
  render() {
    // If role of user in "admin" an item "Add new item" will be shown in menu
    let menuItem = (this.props.store.role==="admin")?(<MenuItem primaryText="Add new item" containerElement={<Link to="/add" />} />):'';
    return (
      <div>
        <AppBar
          iconElementLeft= {<img src='/containers/logo.png'  style={{width:50,height:50,cursor:"pointer"}}/>}
          onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
        />
        <Drawer
          docked={false}
          width={300}
          onRequestChange={this.toggleDrawer.bind(this)}
          open={this.state.open}
        >
          <MenuItem primaryText="Goods" containerElement={<Link to="/list" />} />
          {menuItem}
        </Drawer>
        <div >
          {this.props.children}
        </div>
        <div style={{ textAlign: 'center' }}>
          <br/>
          <Footer/>
        </div>
      </div>
       
    )
  }
}
export default connect(
state => ({
    store:state
  })
  )(App);
