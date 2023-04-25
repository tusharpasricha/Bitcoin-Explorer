import { Component } from "react";

class Comment extends Component {
render() {
 const { commentLine } = this.props;
 return (
  <ul className="comments-list">
  {commentLine.map((val) => {return( 
    <li className="each-comment" 
        key={val.commentId}>
        {val.text}
    </li>)
    })
   }
  </ul>
)};
}

export default Comment;