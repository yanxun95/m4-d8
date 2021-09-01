import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comment: [],
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.elementId !== this.props.elementId) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.elementId,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjZiODJkNTI2MjAwMTViNmRjOTgiLCJpYXQiOjE2MzA0OTg4NjcsImV4cCI6MTYzMTcwODQ2N30.Xlu3WYjWXMf6cyePbQR3NwBhGmckpDLvjDdPriJwQ5Q",
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
