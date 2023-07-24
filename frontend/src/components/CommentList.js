import React, { useEffect, useState } from 'react';
import "./CommentList.css"

const CommentList = (props) => {
  const [comments, setComments] = useState([]);
  const transactionId = props.transaction;
  // Fetch comments from the server
  useEffect(() => {
    fetchComments(transactionId);
  }, [transactionId]);

  // Fetch comments function
  const fetchComments = async (transactionId) => {
    console.log("fetching comments"+transactionId)
    try {
      const response = await fetch(`https://bitcoin-explorer-backend.vercel.app/api/getAllComments/${transactionId}`);
      const data = await response.json();
      setComments(data.comments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  return (
    <div className='outercomment'>
      <h1>Comments</h1>
      {comments.map((comment) => (

        <div className='eachcomment' key={comment._id}>
          <div className='text'>{comment.comment}</div>
          <div className='by'>by {comment.email}</div>
          {/* <p>Transaction: {comment.transaction}</p> */}
          
        </div>

      ))}
    </div>
  );
};

export default CommentList;
