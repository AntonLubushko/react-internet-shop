import React, { Component } from 'react'

export default class AddItemPage extends Component {
  render() {
    return (<div>
             <h1 style={{ textAlign: 'center' }}>
               You are now at AddItemPage PAGE 
             </h1>
             <form className="form" onSubmit={this._onSubmit.bind(this)}>
                <div >
                    <input
                      className="form__field-input"
                      type="text"
                      id="name"
                     // value={this.props.data.name}
                      placeholder="enter an item name"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"/>
                    <label className="form__field-label" htmlFor="name">
                        Name of item
                    </label>
                </div >
                <div >
                    <input
                      className="form__field-input"
                      type="text"
                      id="price"
                      //value={this.props.data.price}
                      placeholder="enter a price"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"/>
                    <label className="form__field-label" htmlFor="price">
                        price
                    </label>
                </div >
                <div className="form__submit-btn-wrapper">
                            <button className="form__submit-btn" type="submit" style={{width:60,height:20}}>
                                Submit
                            </button>
                        
                </div>
            </form >
            </div>
    )
  }
  _onSubmit(evt) {
    evt.preventDefault();
    let localStorage=window.localStorage;
    let name=document.getElementById("name");
    let price=document.getElementById("price");
    let obj = {
      "id":3,
      "name":name.value,
      "img":"some image",
      "price":price.value,
      "description":"new item"
    }
    let array=JSON.parse(localStorage.goods);
    array.push(obj);
    localStorage.goods=JSON.stringify(array);
    console.log(array);
  }

}