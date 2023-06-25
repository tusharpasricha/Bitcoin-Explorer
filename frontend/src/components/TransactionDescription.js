import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar2 from "../comments/navbar2";
import CommentMain from "../comments/CommentMain";

function TransactionDescription() {
  const location = useLocation();
  const username = location?.state?.name || '';
  const navigation = useNavigate();
  const { description, title, hash } = useParams();
  console.log("i am desc" + description);
  console.log("i am title" + title);

  console.log("i am hash" + hash);
  // hash-->title
  // description--->hash
  // title------>description ---->dontknowwhy

  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    async function fetchTransaction() {
      try {
        const response = await axios.get(
          `https://blockstream.info/api/tx/${description}`
        );
        setTransaction(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTransaction();
  }, [description]);
  const handleCommentClick = () => {
    if (isLoggedIn) {
      // navigate to user's profile page
      console.log("you can comment");
    } else {
      // navigate to login page
      console.log("to bepassed"+title);
      navigation("/login" ,{state : {title:title ,hash:hash ,description:description}});
    }
  };
  const isLoggedIn = location?.state?.isLoggedIn;

  return (
    <div>
      <Navbar2 />
      <div className="txdesc">
        <div className="txdesctop">
        <h2>{hash}</h2>
        <h3>{description}</h3>
        <h3>{title}</h3>
        
        </div>

        <div className="remarkabletxs">
          <div className="eachtxs">
            <h5>Transaction ID </h5>
            <p> {transaction?.txid}</p>
          </div>

          <div className="eachtxs">
            <h5> Version: </h5>
            <p> {transaction?.version}</p>
          </div>

          <div className="eachtxs">
            <h5> Locktime: </h5>
            <p> {transaction?.locktime}</p>
          </div>

          <div className="eachtxs">
            <h5> Input TXID:</h5>
            <p> {transaction?.vin[0].txid}</p>
          </div>

          <div className="eachtxs">
            <h5>Input Vout: </h5>
            <p> {transaction?.vin[0].vout}</p>
          </div>

          <div className="eachtxs">
            <h5> Output Value: </h5>
            <p> {transaction?.vout[0].value}</p>
          </div>

          <div className="eachtxs">
            <h5> Size: </h5>
            <p> {transaction?.size}</p>
          </div>

          <div className="eachtxs">
            <h5> Weight:</h5>
            <p> {transaction?.weight}</p>
          </div>

          <div className="eachtxs">
            <h5>Fee: </h5>
            <p> {transaction?.fee}</p>
          </div>
          <div className="eachtxs">
            <h5>Confirmed: </h5>
            <p> {transaction?.status.confirmed ? "Yes" : "No"}</p>
          </div>

          <div className="eachtxs">
            <h5> Block Height: </h5>
            <p> {transaction?.status.block_height}</p>
          </div>

          <div className="eachtxs">
            <h5> Block Hash: </h5>
            <p> {transaction?.status.block_hash}</p>
          </div>

          <div className="eachtxs">
            <h5> Block Time:</h5>
            <p> {transaction?.status.block_time}</p>
          </div>
        </div>
      </div>

      {isLoggedIn ? (
         <CommentMain isLoggedIn={isLoggedIn} tx_hash={hash} username={username} />
      ) : (
        <button
          onClick={handleCommentClick}
          className="login-btn btn btn-secondary"
        >
          Log in to comment
        </button>
      )}

     


      {/* {isLoggedIn ? (
        <button
          onClick={handleCommentClick}
          className="profile-btn btn btn-primary"
        >
          Add a comment as {username}
        </button>
      ) : (
        <button
          onClick={handleCommentClick}
          className="login-btn btn btn-secondary"
        >
          Log in to comment
        </button>
      )} */}
    </div>
  );
}

export default TransactionDescription;
