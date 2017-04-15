import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Footer extends Component {
  render() {
    let goods = JSON.parse(global.window.localStorage.goods);
    let count = goods.length;
    let totalCost = goods.reduce((acc,item) => acc+Number(item.price),0);
    let avg = (totalCost/count).toFixed(2);
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
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