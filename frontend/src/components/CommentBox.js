import React , {useState} from 'react'
import './CommentBox.css'
export const CommentBox = (props) => {
  const [commentInput, setCommentInput] = useState('');

  const submithandler=async(e)=>{
    e.preventDefault();
    //const comment = e.target.comment.value;
    const comment = commentInput;
    const email = props.email;
    const transaction = props.transaction;
    console.log(comment,email,transaction)
    if(comment) {
      const response = await fetch('https://bitcoin-explorer-backend.vercel.app/api/comments', {
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
                setCommentInput('');
            }
      
  }
  }
  const handleInputChange = (e) => {
    setCommentInput(e.target.value);
  };


  return (
    
    <div className='commentbox'>
      <form  onSubmit={submithandler}  >
      <div class="formcontrol">
      <input name="comment" class="input inputalt" placeholder="Add you views" required="" type="text"value={commentInput} onChange={handleInputChange}/>
      <span class="inputborder inputborderalt"></span>
      </div>

      
      
      <button type="submit" class="button">
        <span class="lable">Comment</span>
      </button>
      
      

      </form>
      </div>

    

  )
}
