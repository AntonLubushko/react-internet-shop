import React, { Component } from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'

class Footer extends Component {
  render() {
    let count = this.props.statistic[0];
    let totalCost = this.props.statistic[1];
    let avg = this.props.statistic[2];;
    return (
      <div className='container'>
        <div >
          <div >
            <div>
            <label>Count of all goods: </label>
            {count}
            </div>
            <div>
            <label>Total price of all goods: </label>
            {totalCost}
            </div>
            <div>
            <label>Average price of all goods: </label>
            {avg}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
 state => ({
    statistic: state
  })
)(Footer);