import { useEffect, useState } from "react";
import { Alert, ListGroup } from "react-bootstrap";

const ShowDetail = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        let response = await fetch(
          "http://www.omdbapi.com/?apikey=96b951ba&i=" + match.params.movieID
        );
        let movie = await response.json();
        setMovie(movie);
        console.log(movie);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieData();
  }, [match.params.movieID]);

  useEffect(() => {
    const getCommentData = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            match.params.movieID,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjZiODJkNTI2MjAwMTViNmRjOTgiLCJpYXQiOjE2MzA0OTg4NjcsImV4cCI6MTYzMTcwODQ2N30.Xlu3WYjWXMf6cyePbQR3NwBhGmckpDLvjDdPriJwQ5Q",
            },
          }
        );
        let comments = await response.json();
        setComments(comments);
        console.log(comments);
      } catch (error) {
        console.log(error);
      }
    };
    getCommentData();
  }, [match.params.movieID]);

  return (
    <div
      className="d-flex"
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {movie ? (
        <div style={{ width: "18rem", margin: "1rem" }}>
          <h1 style={{ color: "white" }}>{movie.Title}</h1>
          <img
            src={movie.Poster}
            className="card-img-top img-fluid"
            alt="..."
          />
          <ListGroup style={{ margin: "1rem" }}>
            {comments.length > 0 &&
              comments.map((comment) => (
                <ListGroup.Item key={comment._id}>
                  {comment.comment}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </div>
      ) : (
        <div>
          <Alert variant={"danger"}>404 error</Alert>
        </div>
      )}
    </div>
  );
};

export default ShowDetail;
