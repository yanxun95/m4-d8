import { ListGroup } from "react-bootstrap";

const CommentList = (props) => (
  <ListGroup>
    {props.comments.length > 0 &&
      props.comments.map((comment) => (
        <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>
      ))}
  </ListGroup>
);

export default CommentList;
