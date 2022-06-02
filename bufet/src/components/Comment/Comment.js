import React from "react";
import "./Comment.css";

const Comment = (props) => {
  const _deleteComment = () => {
    alert("-- DELETE Comment Functionality COMMING SOON...");
  };
  return (
    <div className="comment">
      <p className="comment-header">{props.author}</p>
      <p className="comment-body">- {props.body}</p>
      <div className="comment-footer">
        <a href="#" className="comment-footer-delete" onClick={_deleteComment}>
          Delete Comment
        </a>
      </div>
    </div>
  );
};

export default Comment;
