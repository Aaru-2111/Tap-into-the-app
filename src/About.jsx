import React, { Component } from 'react'

export default class About extends Component {
  retrieveMessage=()=>{
    console.log("this is retrieved message");
  }
  render() {
    return (
      <div className="container">
        Click here to get customized message
        <button onClick={this.retrieveMessage} className="btn btn-success"> Get customized message</button>

      </div>
    )
  }
}
