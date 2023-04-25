import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import './navbar.css'
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Navbar2 = () => {
  const location = useLocation();
  const username = location?.state?.name || '';
  const navigation = useNavigate();
  const { description, title, hash } = useParams();
  let isLoggedIn = location?.state?.isLoggedIn;
  const submithandle=()=>{
    navigation('/login',{state : {title:title ,hash:hash ,description:description}})

  }
  const submithandle2=()=>{
    isLoggedIn=false;
    navigation('/')

  }
  return (
    <div className='navbar'>
        <h4>Bitcoin Explorer</h4>
       
        {isLoggedIn?<button onClick={submithandle2} className='loginbtn'>Log Out</button>:<button onClick={submithandle} className='loginbtn'>Log in</button>}
    </div>
  )
}

export default Navbar2