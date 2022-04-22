import React from 'react'

const Footer = () => {
  let footerstyle={
   
    top:"100vh",
    position:"relative",
    width:"100%",
    border:"2px solid red"
  }

  
  return (
     //styling the footer with the help of an object
    <div className="bg-dark text-light py-3" style={footerstyle}>   
     <p className="text-center">
       Copyright &copy; My TodoList.com
    </p>
    </div>
  )
}

export default Footer
