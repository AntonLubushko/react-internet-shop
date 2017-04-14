import React, { Component } from 'react'
import { Link } from 'react-router'
import Chip from 'material-ui/Chip';

let localStorage = global.window.localStorage;

class List extends Component {
  constructor(props){
    super(props);
    
      console.log('Beginning of list goods');
      let xhr = new XMLHttpRequest();
      xhr.open('GET', '/items/items.json', false);
      xhr.send();
      if (xhr.status != 200) {
        console.log( xhr.status + ': ' + xhr.statusText ); 
      } else {
        localStorage.goods = xhr.responseText;
      }
    
    this.state={
      displayedItems:localStorage.goods
    };
  }
  
  deleteItem(id){
    console.log(id);
    let array = JSON.parse(this.state.displayedItems);
    this.setState({
      displayedItems : JSON.stringify(array.filter(elem => elem.id!==id))
    });
    
  }
  
  render() {
    
    return (
      <div style={{ textAlign: 'center' }}>
        <div className='row'>
          <div className='col-md-12'>
            <h3> List of goods </h3>
          </div>
        </div>
       <div className='col-md-12'>
         {
           JSON.parse(this.state.displayedItems).map((obj,i) => 
              <div className='row' key={i}>
                <div >
                  <p >
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
      </div>
    )
  }
}
export default List;