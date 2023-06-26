import React, { useEffect, useState } from 'react';

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
    <div>
      <h1>Comments</h1>
      {comments.map((comment) => (
        <div key={comment._id}>
          <p>Comment: {comment.comment}</p>
          <p>Email: {comment.email}</p>
          <p>Transaction: {comment.transaction}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
