import React, { useState, useEffect } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar2 from './navbar2';

function TransactionDescription() {
    const location = useLocation();
    const navigation = useNavigate()
  const { title, hash } = useParams();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    async function fetchTransaction() {
      try {
        const response = await axios.get(`https://blockstream.info/api/tx/${hash}`);
        setTransaction(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTransaction();
  }, [hash]);
  const handleCommentClick = () => {
    if (isLoggedIn) {
      // navigate to user's profile page
     console.log("you can comment")
    } else {
      // navigate to login page
      navigation('/login')
    }
  }
  const isLoggedIn = location?.state?.isLoggedIn

  return (
    <div>
        <Navbar2/>
      <h2>Transaction Description</h2>
      <h2>{title}</h2>
      <h3>{hash}</h3>
       <p>Version: {transaction?.version}</p>
       <p>Locktime: {transaction?.locktime}</p>
       <p>Size: {transaction?.size}</p>
       <p>Weight: {transaction?.weight}</p>
    <p>Fee: {transaction?.fee}</p>
    {isLoggedIn ? (
        <button onClick={handleCommentClick} className='profile-btn'>
          comment
        </button>
          ) : (
        <button onClick={handleCommentClick} className='login-btn'>
          Log in to comment
        </button>
      )}
    </div>
  );
}

export default TransactionDescription;
