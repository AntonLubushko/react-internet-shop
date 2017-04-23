/**
  List page shows all items from localStorage
  route: /list 
*/
import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';

// Data storage
const LS = window.localStorage;

// Styles of grid
const styles = {
  
  
};

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
      (<button 
          className="del-btn"
          onClick={this.deleteAll.bind(this)}
        >
          <b>Delete all items</b>
         </button>
      ):'';
    return (
      <div>
        <h1 className="center-header"> List of goods </h1>
        {// Show all items in storage
        // If role is "admin" cross-image will be shown 
        // and admin can delete an item
        }
        <div className="root">
          <GridList className="gridList" cellHeight={180}>
            {JSON.parse(LS.goods).map((item,index) => 
              <GridTile key={index} 
                        title={item.name} 
                        subtitle={
                          <span>
                            {item.description}
                          </span>
                        }
                        actionIcon={
                          (this.props.store.role === "admin")?
                          (<img 
                            className="delete-cross"
                            src="items/img/close.png" 
                            onClick={this.deleteItem.bind(this,item.id)}
                           />
                          ):null
                        }
              >
                <img src={item.img}/>
              </GridTile>
            )}
          </GridList>
        </div>  
        <div className="center-delAll-btn">      
          {deleteAllButton}
        </div>
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
