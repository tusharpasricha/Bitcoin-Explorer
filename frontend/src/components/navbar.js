import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import './navbar.css'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const username = location?.state?.name || '';
  const navigation = useNavigate();
  const submithandle=()=>{
    navigation('/login')


  }
  return (
    <div className='navbar'>
        <h4>Bitcoin Explorer</h4>
        <h1>Welcome, {username}!</h1>
        <button onClick={submithandle} className='loginbtn'>Log in</button>
    </div>
  )
}

export default Navbar