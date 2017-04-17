import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Prohibited extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            Ooops, you are not admin, back to <Link to='/list'>items</Link>?
          </div>
        </div>
      </div>
    )
  }
}