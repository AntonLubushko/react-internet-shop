/**
  List page shows all items from localStorage
  route: /list 
*/
import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

// Data storage
const LS = window.localStorage;

class List extends Component {
  /**
  * Delete an item by id
  * @params {number} id The id of item to be deleted
  */
  deleteItem(id){
    this.props.onDelete(id);
  }
  /**
  * Delete all items
  */
  deleteAll(){
    this.props.onDelete();
  }

  render() {
    // If the role is "admin" this delete button will be existed 
    // and admin can delete all items in one time
    let deleteAllButton = (this.props.store.role === "admin")?
      (<div>
         <button 
         style={{width:130,height:20}}
         onClick={this.deleteAll.bind(this)}
         style={{cursor: "pointer"}}
         >
          Delete all items
         </button>
      </div>):'';
    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          <div>
            <h1> List of goods </h1>
          </div>
        </div>
      <div>
       {
          // Show all items in storage
          // If role is "admin" cross-image will be shown 
          // and admin can delete an item
          JSON.parse(LS.goods).map((obj,i) => 
            <div key={i}>
              <div>
                {obj.name+" "}
              
                {(this.props.store.role === "admin")?
                  (<img src="items/img/delete.png" 
                        onClick={this.deleteItem.bind(this,obj.id)}
                        className="delete"
                  />):''
                }
                </div>
                <div>
                  <img src={obj.img} style={{width:80,height:80}} />
                </div>
              <div>
                <p>{obj.description}</p>
              </div>  
            </div>
          )
       }
         </div>
          {deleteAllButton}
         </div>
    )
  }
}
export default connect(
  state => ({
    store:state
  }),
  dispatch => ({
    onDelete:(id) =>{
     dispatch({type:'DELETE_ITEM',payload:id});
    }
  })
)(List);