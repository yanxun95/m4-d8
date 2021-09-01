import { Component } from "react";
import "../style/style.css";
import CommentArea from "./CommentArea";
import { withRouter } from "react-router-dom";

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
            onClick={() =>
              this.props.history.push("/" + this.props.movie.imdbID)
            }
          />
          <span style={{ display: "none" }}>{this.props.movie.Title}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieCard);
