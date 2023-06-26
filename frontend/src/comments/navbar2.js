import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import '../staticComponents/navbar.css'
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Navbar2 = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const { description, title, hash } = useParams();
  let isLoggedIn = location?.state?.isLoggedIn;
  const email = location?.state?.email;
  const handlelogin=()=>{
    navigation('/login',{state : {title:title ,hash:hash ,description:description}})

  }
  const handlelogout=()=>{
    isLoggedIn=false;
    navigation('/')

  }
  return (
    <div className='navbar'>
        <h4>Bitcoin Explorer</h4>
        {email?<div>{email}</div>:null}
        {isLoggedIn?<button onClick={handlelogout} className='loginbtn'>Log Out</button>:<button onClick={handlelogin} className='loginbtn'>Log in</button>}
    </div>
  )
}

export default Navbar2