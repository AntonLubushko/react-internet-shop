/**
  Footer component instantly shows statictic by all items in localStage
*/
import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

class Footer extends Component {
  render() {
    // Take statistic data from store to show them
    let count = this.props.store.statistic[0];
    let totalCost = this.props.store.statistic[1];
    let avg = this.props.store.statistic[2];;
    return (
      <div>
        <div>
          <div>
            <div>
              <label>Count of all goods: </label>
              {count}
            </div>
            <div>
              <label>Total price of all goods: </label>
              {totalCost}
            </div>
            <div>
              <label>Average price of good: </label>
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
    store: state
  })
)(Footer);