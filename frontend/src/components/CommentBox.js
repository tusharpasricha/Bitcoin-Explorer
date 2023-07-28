import React, { useState } from 'react'
import './CommentBox.css'
export const CommentBox = (props) => {

  const submithandler=async(e)=>{
    e.preventDefault();
    const comment = e.target.comment.value;
    const email = props.email;
    const transaction = props.transaction;
    console.log(comment,email,transaction)
    if(comment) {
      const response = await fetch('http://localhost:8000/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment, email , transaction })
            });
            const data = await response.json();
            if(!response.ok){
                console.log(data.error);
            }
            if (response.ok) {
                console.log(data);
            }
      
  }
  }


  return (
    
    <div className='commentbox'>
      <form  onSubmit={submithandler}  >
      <div class="formcontrol">
      <input name="comment" class="input inputalt" placeholder="Add you views" required="" type="text"/>
      <span class="inputborder inputborderalt"></span>
      </div>

      
      
      <button type="submit" class="button">
        <span class="lable">Comment</span>
      </button>
      
      

      </form>
      </div>

    

  )
}
