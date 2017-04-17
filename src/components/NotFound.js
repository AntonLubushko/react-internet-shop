import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFound extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <div>
            Ooops, page not found, back to <Link to='/list'>items</Link>?
          </div>
        </div>
      </div>
    )
  }
}