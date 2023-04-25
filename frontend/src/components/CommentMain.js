import { Component } from "react";
import Commentbox from "./Commentbox";
import Comment from "./Comment";

let commentCounter = 1;

class CommentMain extends Component {
  constructor() {
    super();
    this.state = {
      commentValue: "",
      commentLine: [{ commentId: "", text: "" }],
      isLoggedIn: this.props
    };
  }

  handleCommentValue = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  setCommentLine = () => {
    this.setState({
      commentLine: [
        ...this.state.commentLine,
        { commentId: commentCounter++, text: this.state.commentValue },
      ],
      commentValue: "",
    });
  };

  submitCommentLine = (e) => {
    e.preventDefault();
    this.setCommentLine();
  };

  enterCommentLine = (e) => {
    if (e.charCode === 13) {
      this.setCommentLine();
    }
  };

  render() {
    return (
      <div>
        <Commentbox
          commentValue={this.state.commentValue}
          handleCommentValue={this.handleCommentValue}
          enterCommentLine={this.enterCommentLine}
          submitCommentLine={this.submitCommentLine}
          isLoggedIn={this.state.isLoggedIn}
            />
            <Comment commentLine={this.state.commentLine} />
      </div>
    );
  }
}

export default CommentMain;