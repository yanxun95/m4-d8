import { Component } from "react";
import "../style/style.css";
import CommentArea from "./CommentArea";

class MovieCard extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <div className="col-sm-6 col-md-4 col-xl-2 px-1">
        <div
          onClick={() => {
            this.setState({ selected: !this.state.selected });
            this.props.newSelectedMovie(this.props.movie.imdbID);
            console.log(this.props.movie.imdbID);
          }}
          className="card"
        >
          <img
            src={this.props.movie.Poster}
            className="card-img-top img-fluid"
            alt="..."
          />
          <span style={{ display: "none" }}>{this.props.movie.Title}</span>
        </div>
        {/* {this.state.selected && (
          <CommentArea elementId={this.props.movie.imdbID}></CommentArea>
        )} */}
      </div>
    );
  }
}

export default MovieCard;
