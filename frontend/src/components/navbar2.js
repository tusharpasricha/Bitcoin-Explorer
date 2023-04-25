import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import './navbar.css'
import { useLocation } from 'react-router-dom';

const Navbar2 = () => {
  const location = useLocation();
  const username = location?.state?.name || '';
  const isLoggedIn = location?.state?.isLoggedIn;
  const navigation = useNavigate();
  const submithandle=()=>{
    navigation('/login')

  }
  const submithandle2=()=>{
    navigation('/login')

  }
  return (
    <div className='navbar'>
        <h4>Bitcoin Explorer</h4>
        <h1> {username}</h1>
        {isLoggedIn?<button onClick={submithandle2} className='loginbtn'>Log Out</button>:<button onClick={submithandle} className='loginbtn'>Log in</button>}
    </div>
  )
}

export default Navbar2