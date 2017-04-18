/**
  AddItem page allows user with role "admin" to add an item to storage,
  it will not be shown to user with not "admin" role
  route: /add 
*/
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {browserHistory } from 'react-router';

class AddItem extends Component {
  render() {
    //Check role, if role is not "admin" redirect to prohibited page
    let role = this.props.store.role;
    if(role !== "admin"){
     browserHistory.push('/prohibited');
    }
    
    // If role is "admin" continue to render the component
    return (
      <div style={{ align: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>
          Add another item here 
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
                style={{width:60,height:20,cursor:"pointer"}}>
                Submit
              </button>
            </div>
          </form >
        </div>
      </div>
    )
  }
  submit(evt) {
    // Avoid page reload
    evt.preventDefault();
    
    // Use ref to work with content of input tags
    let name=this.nameInput.value;
    let price=Number(this.priceInput.value);
    let description=this.descriptionInput.value;
    
    // I want fields name and price be fullfilled, and also price must be correct
    if((name.length>0) && !isNaN(price) && (price>0)){
      let newId = Number(localStorage.max)+1;
      let item = {
        "id": newId,
        "name":name,
        "img":"../items/img/item.jpg",
        "price":price,
        "description":description
      }
      
      // Clear the fields of inputs after submitting
      this.nameInput.value='';
      this.priceInput.value='';
      this.descriptionInput.value='';
      
      // Dispatch new action to change the store
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