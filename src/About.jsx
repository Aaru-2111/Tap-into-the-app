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
  //  HelloWorldService.executeHelloWorldService()
  //  .then(response=>this.handlesuccess(response))
  HelloWorldService.executebean()
  .then(response=>this.handlesuccess(response))
    // HelloWorldService.executevariablepath(this.props.)
    // HelloWorldService.executeerror()
    // .then (response =>this.handlesuccess(response) );     //handle success response 
    // .catch(error => this.handleerror(error) )             //handle error response
    
    // .catch(error)=>this.handleerror(error) );
    
   
  }
handlesuccess=(response)=>{
  console.log(response);
  this.setState({WelcomeMessage:response.data.msg});
}
  //   //this.setState({WelcomeMessage:response.data}); for the normal string
  //    this.setState({WelcomeMessage:response.data.msg});   //since it returns an object , see in the console its not just data it is msg inside the data

  // }
  // handleerror=(error)=>{
  //   console.log(error.response);
  //   //this.setState({error:response.data});
  // }
  // // getmessage=()=>{
  //   HelloWorldService.executebean()
  //   .then(response=>this.handlesuccess(response));
  // }
  
  render() {
    return (
      <>
      {/* <div>Welcome {this.props.About}
        You can manage your todos <link to="/">here</link>
      </div> */}
      <div className="container">
        Click here to get customized message
        <button onClick={this.retrieveMessage} className="btn btn-success"> Get customized message</button>
      </div>
      <div className="container">
        {this.state.WelcomeMessage}
      </div> 
        {/* <button onClick={this.retrieveMessage} className="btn btn-danger">Click me!</button>
        <div className="container">
        {this.state.WelcomeMessage}
        </div>  */}
        </>
    )
  }
}
