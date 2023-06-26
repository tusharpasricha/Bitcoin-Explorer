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
    
    
      <form className='commentbox' onSubmit={submithandler}  >
      <div class="form-control">
      <input name="comment" class="input input-alt" placeholder="ADD YOU VIEWS" required="" type="text"/>
      <span class="input-border input-border-alt"></span>
      </div>

      <button type="submit" class="button">
        <svg class="svg-icon" width="24" viewBox="0 0 24 24" height="24" fill="none"><g stroke-width="2" stroke-linecap="round" stroke="#056dfa" fill-rule="evenodd" clip-rule="evenodd"><path d="m3 7h17c.5523 0 1 .44772 1 1v11c0 .5523-.4477 1-1 1h-16c-.55228 0-1-.4477-1-1z"></path><path d="m3 4.5c0-.27614.22386-.5.5-.5h6.29289c.13261 0 .25981.05268.35351.14645l2.8536 2.85355h-10z"></path></g></svg>
        <span class="lable">Comment</span>
      </button>
      </form>

    

  )
}
