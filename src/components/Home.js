import React, { Component } from 'react'
var fileAPISupport = false;
if(window.File && window.FileReader && window.FileList && window.Blob) {
fileAPISupport = true;
}
console.log(fileAPISupport);
export default class Home extends Component {
  render() {
    return (
      <h1>
    You are now at HOME PAGE (<code>route: {'/'}</code>)
  </h1>
    )
  }
}