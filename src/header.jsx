import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
export default function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">My Todo List</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        {/* <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="#">Action</Link></li>
            <li><Link class="dropdown-item" to="#">Another action</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link disabled">Disabled</Link>
        </li> */}
      </ul>
      {props.searchbar?<form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>:""}
    </div>
  </div>
</nav>
    
  )
}

Header.propTypes={
  title: PropTypes.string,
  searchbar: PropTypes.bool

}
Header.defaultProps={
  title:"Your title here",
  searchbar:"True"
}
{/* <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light" >
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-a active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-a" to="/#">About</Link>
          </li>
          
        </ul> 
        {/*another use of props , we can pass any number of property , in the function argument will be props only and access with props.name */}
        {/*ternary operator is used here, if searcg bar is false show search button else dont show , just show empty string */}
  //       {props.searchbar?<form className="d-flex">
  //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  //         <button className="btn btn-outline-success" type="submit">Search</button>
  //       </form>:""}
  //     </div>
  //   </div>
  // </nav>  
  //   </div>


