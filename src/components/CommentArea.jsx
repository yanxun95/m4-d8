import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comment: [],
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.elementId !== this.props.elementId) {
      console.log("movie has changed!");
      console.log(prevProps.elementId);
      console.log(this.props.elementId);
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.elementId,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjZiODJkNTI2MjAwMTViNmRjOTgiLCJpYXQiOjE2MjkyODgxMjAsImV4cCI6MTYzMDQ5NzcyMH0.XfRUnn6BFJPPRnEwvnQnjrk0oaXPSwwKyJlEGV6Wn9k",
            },
          }
        );
        if (response.ok) {
          let data = await response.json();
          this.setState({ comment: data });
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    return (
      <div className="container">
        <AddComment elementId={this.props.elementId}></AddComment>
        {this.state.comment.length > 0 && (
          <CommentList comments={this.state.comment}></CommentList>
        )}
      </div>
    );
  }
}

export default CommentArea;
