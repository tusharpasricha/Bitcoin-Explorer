import React, { useEffect, useState } from 'react';
import "./CommentList.css"

const CommentList = () => {
  const [comments, setComments] = useState([]);

  // Fetch comments from the server
  useEffect(() => {
    fetchComments();
  }, []);

  // Fetch comments function
  const fetchComments = async () => {
    console.log("fetching comments")
    try {
      const response = await fetch('http://localhost:8000/api/getAllComments');
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
