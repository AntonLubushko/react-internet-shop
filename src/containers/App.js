import React, { Component } from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Footer from '../components/Footer'

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
          iconElementLeft= {<img src='/containers/logo.png'  style={{width:50,height:50}}/>}
          onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
        />
        <Drawer
          docked={false}
          width={300}
          onRequestChange={this.toggleDrawer.bind(this)}
          open={this.state.open}
        >
          <MenuItem primaryText="Goods" containerElement={<Link to="/list" />} />
          <MenuItem primaryText="Add new item" containerElement={<Link to="/add-item" />} />
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