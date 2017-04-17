import React, { Component } from 'react'
import { Link } from 'react-router'
import {browserHistory } from 'react-router'
import {connect} from 'react-redux'

class AddItemPage extends Component {
  render() {
    return (
      <div style={{ align: 'center' }}>
              <h1 style={{ textAlign: 'center' }}>
                You are now at AddItemPage PAGE 
              </h1>
              <div style={{ textAlign: 'center' }}>
              <form onSubmit={this.submit.bind(this)} >
                  <div style={{ align: 'center' }}>
                      <input
                        type="text"
                        id="name"
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
                  <div style={{ align: 'center'}}>
                      <input
                        type="text"
                        id="description"
                        placeholder="your text, bro"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                      <label htmlFor="description">
                        Description
                      </label>
                  </div >
                  <div >
                    <button 
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
  submit(evt) {
    evt.preventDefault();
    let localStorage=window.localStorage;
    let name=document.getElementById("name");
    let price=document.getElementById("price");
    let description=document.getElementById("description");
    let newId = Number(localStorage.max)+1;
    let obj = {
      "id": newId,
      "name":name.value,
      "img":"some image",
      "price":price.value,
      "description":description.value
    }
    let array=JSON.parse(localStorage.goods);
    array.push(obj);
    localStorage.goods=JSON.stringify(array);
    localStorage.max = newId;
    this.props.onAddItem();
    console.log('added id ',obj.id);
    //browserHistory.push('/list');
  }
}
export default connect(
  state => ({

  }),
  dispatch => ({
    onAddItem:() =>{
     dispatch({type:'ADD_ITEM'});
    }
  })
)(AddItemPage);