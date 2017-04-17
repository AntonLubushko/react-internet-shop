import React, { Component } from 'react'
import { Link } from 'react-router'
import Chip from 'material-ui/Chip';
import {connect} from 'react-redux'

let localStorage = global.window.localStorage;

class List extends Component {
  deleteItem(id){
    console.log('deleted id ',id);
    let array = JSON.parse(localStorage.goods);
    array = array.filter(elem => elem.id!==id);
    localStorage.max = localStorage.max>id?localStorage.max:(id-1);
    localStorage.goods=JSON.stringify(array);
    this.props.onDelete();
  }

  deleteAll(){
    console.log('all items are deleted');
    localStorage.max = 0;
    localStorage.goods='[]';
    this.props.onDelete();
  }

  render() {
    //console.log(this.props.statistic);
    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          <div>
            <h3> List of goods </h3>
          </div>
        </div>
       <div className='col-md-12'>
         {
           JSON.parse(localStorage.goods).map((obj,i) => 
              <div key={i}>
                <div>
                  <p>
                  {obj.name}
                  <div >
                    <img src="items/img/delete.png" onClick={this.deleteItem.bind(this,obj.id)} />
                  </div>
                  </p>
                  <img src={obj.img} style={{width:80,height:80}} />
                </div>
                <div >
                  <p>{obj.description}</p>
                </div>  
              </div>
            )
         }
         </div>
         <div >
         <button 
         style={{width:130,height:20}}
         onClick={this.deleteAll.bind(this)}
         >
         Delete all items

         </button>
         </div>
         </div>
    )
  }
}
export default connect(
  state => ({
    statistic:state
  }),
  dispatch => ({
    onDelete:() =>{
     dispatch({type:'DELETE_ITEM'});
    }
  })
)(List);