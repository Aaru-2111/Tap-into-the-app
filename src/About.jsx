import axios from 'axios';
import React, { Component } from 'react'
import HelloWorldService from './api/todo/HelloWorldService';
export default class About extends Component {
  
  constructor(props)
 {   super(props)
     this.state={
     WelcomeMessage:'',
    }
  }
  retrieveMessage=()=>{
    HelloWorldService.executeHelloWorldService()
    .then (response=>this.handlesuccess(response) );
    //catch()
  }
  handlesuccess=(response)=>{
     this.setState({WelcomeMessage:response.data});
  }
  
  render() {
    return (
      <>
      <div className="container">
        Click here to get customized message
        <button onClick={this.retrieveMessage} className="btn btn-success"> Get customized message</button>

      </div>
       <div className="container">
        {this.state.WelcomeMessage}
        </div> 
        </>
    )
  }
}
