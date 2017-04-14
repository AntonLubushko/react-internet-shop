import React, { Component } from 'react'
import { Link } from 'react-router'
import {browserHistory } from 'react-router'

export default class AddItemPage extends Component {
  render() {
    return (<div style={{ align: 'center' }}>
              <h1 style={{ textAlign: 'center' }}>
                You are now at AddItemPage PAGE 
              </h1>
              <div style={{ textAlign: 'center' }}>
              <form className="form" onSubmit={this._onSubmit.bind(this)} >
                  <div style={{ align: 'center' }}>
                      <input
                        className="form__field-input"
                        type="text"
                        id="name"
                      // value={this.props.data.name}
                        placeholder="enter an item name"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                      <label >
                          Name
                      </label>
                  </div >
                  <div style={{ align: 'center' }}>
                      <input
                        type="text"
                        id="price"
                        placeholder="enter a price"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                      <label htmlFor="price">
                        Price
                      </label>
                  </div >
                  <div className="form__submit-btn-wrapper">
                              <button 
                                className="form__submit-btn" 
                                type="submit" 
                                style={{width:60,height:20}}>
                                Submit
                              </button>
                  </div>
              </form >
              </div>
            </div>
    )
  }
  _onSubmit(evt) {
    evt.preventDefault();
    let localStorage=window.localStorage;
    let name=document.getElementById("name");
    let price=document.getElementById("price");
    let obj = {
      "id":Number(localStorage.max)+1,
      "name":name.value,
      "img":"some image",
      "price":price.value,
      "description":"new item"
    }
    let array=JSON.parse(localStorage.goods);
    array.push(obj);
    localStorage.goods=JSON.stringify(array);
    console.log(array);
    localStorage.max = Number(localStorage.max)+1;
    browserHistory.push('/list');
  }
}