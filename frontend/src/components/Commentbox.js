import React, { Component } from "react";

class Commentbox extends Component {
  render() {
    const {
      commentValue,
      handleCommentValue,
      enterCommentLine,
      submitCommentLine,
      isLoggedIn,
    } = this.props;

    const enableCommentBox = () => {
      return isLoggedIn ? false : true;
    };
    const enableCommentButton = () => {
      return commentValue ? false : true;
    };

    const changeCommentButtonStyle = () => {
      return commentValue
        ? "comments-button enabled"
        : "comments-button disabled";
    };
    return (
      <div className="mb-3 mt-3 comments-box">
        <label for="comment">Leave a comment:</label>
        <input
          onKeyDown={enterCommentLine}
          value={commentValue}
          id="comments-input comment"
          onChange={handleCommentValue}
          type="text"
          placeholder="Add a comment..."
          disabled={enableCommentBox()}
        />
        <button
          onClick={submitCommentLine}
          type="submit"
          className="comments-button btn btn-outline-primary"
          id={changeCommentButtonStyle()}
          disabled={enableCommentButton()}
        >
          Post
        </button>
      </div>
    );
  }
}

export default Commentbox;
