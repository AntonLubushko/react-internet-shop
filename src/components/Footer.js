import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Footer extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            This is footer <Link to='/'>to главную</Link>?
            {global.window.localStorage.goods}
          </div>
        </div>
      </div>
    )
  }
}