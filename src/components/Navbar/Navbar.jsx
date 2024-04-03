import React from 'react'
import './Navbar.css'
import icon from "../Images/icon.png";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <nav>
      <Link to={''}>
      <div id="logo">
          <img src={icon} alt="" />
        </div>
      </Link>
        
        <div id="options">
           <Link id='item' to={''}>Home</Link>
           <Link id='item' to={'listing'}>Listing</Link>
           <Link id='item' to={'agents'}>Agent</Link>
           <Link id='item' to={'property'}>Property</Link>
           <Link id='item' to={'blog'}>Blog</Link>
        </div>
        <div id="srh-log">
            <input type="search" placeholder='Search'/>
            <button>Login</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar