/**
  NotFound page appears when user tries to go to not existing route
*/

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            Ooops, page not found, back to <Link to='/list'>items</Link>
          </div>
        </div>
      </div>
    )
  }
}