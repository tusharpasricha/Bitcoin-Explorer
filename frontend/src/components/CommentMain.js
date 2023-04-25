import { Component } from "react";
import Commentbox from "./Commentbox";
import Comment from "./Comment";
import Axios from 'axios';

let commentCounter = 1;

class CommentMain extends Component {
  constructor() {
    super();
    this.state = {
      commentValue: "",
      commentLine: [{ commentId: "", text: "" }],
      isLoggedIn: false,
      tx_hash: 0,
      username: "",
      commentsarray:[]
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

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.isLoggedIn !== this.state.isLoggedIn) {
  //     this.setState({ isLoggedIn: this.props.isLoggedIn });
  //   }
  //   if (prevState.tx_hash !== this.state.tx_hash) {
  //     this.setState({ tx_hash: this.props.tx_hash });
  //   }
  //   if (prevState.username !== this.state.username) {
  //     this.setState({ username: this.props.username });
  //   }
  // }
  

  componentDidMount() {
    console.log("inside component did mount")
     const fetchedcomments = async () => {
       const response = await Axios(
         `http://localhost:5000/api/posts/${this.tx_hash}/viewcomments`
       );
       console.log("this is fetched comment response" + response);
       this.setState({ commentsarray: [...response] });
     };
    fetchedcomments();
    this.setState({
      isLoggedIn: this.props.isLoggedIn,
      tx_hash: this.props.tx_hash,
      username:this.props.username,
    });
    

    // fetch(`http://localhost:5000/api/posts/${this.tx_hash}/viewcomments`).then(
    //   (res) => {
    //     console.log("Inside fetch")
    //     console.log(res);
    //     this.setState({ commentsarray: [...res] })
    //   });
    // console.log(this.commentsarray);
      }
  render() {
    return (
      <div>
        <Commentbox
          commentValue={this.state.commentValue}
          handleCommentValue={this.handleCommentValue}
          enterCommentLine={this.enterCommentLine}
          submitCommentLine={this.submitCommentLine}
          isLoggedIn={this.state.isLoggedIn}
          username={this.state.username}
        />
        <Comment commentLine={this.state.commentLine} />
      </div>
    );
  }
}

export default CommentMain;