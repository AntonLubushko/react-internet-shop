import React, { Component } from 'react';
import {connect} from 'react-redux';
import {browserHistory } from 'react-router';

class AddItem extends Component {
  render() {
    let role = this.props.store.role;
    if(role !== "admin"){
     browserHistory.push('/prohibited');
    }
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
                spellCheck="false"
                ref={(input) => {this.nameInput = input}}/>
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
                spellCheck="false"
                ref={(input) => {this.priceInput = input}}/>
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
                spellCheck="false"
                ref={(input) => {this.descriptionInput = input}}/>
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
    let name=this.nameInput.value;
    let price=Number(this.priceInput.value);
    console.log(price);
    let description=this.descriptionInput.value;
    if((name.length>0) && !isNaN(price) && (price>0)){
      let newId = Number(localStorage.max)+1;
      let item = {
        "id": newId,
        "name":name,
        "img":"../items/img/item.jpg",
        "price":price,
        "description":description
      }
      this.nameInput.value='';
      this.priceInput.value='';
      this.descriptionInput.value='';
      this.props.onAddItem(item);
    }
  }
}
export default connect(
  state => ({
    store:state
  }),
  dispatch => ({
    onAddItem:(item) =>{
     dispatch({type:'ADD_ITEM',payload:item});
    }
  })
)(AddItem);