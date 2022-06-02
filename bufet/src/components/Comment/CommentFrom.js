import React from "react";
import "./Comment.css";
const CommentForm = (props) => {
  let author = null;
  let body = null;
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addComment(author.value, body.value);
  };
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="comment-form-fields">
        <input
          placeholder="Name"
          required
          ref={(input) => (author = input)}
        ></input>
        <br />
        <textarea
          placeholder="Comment"
          rows="4"
          required
          ref={(textarea) => (body = textarea)}
        ></textarea>
      </div>
      <div className="comment-form-actions">
        <button type="submit">Post Comment</button>
      </div>
    </form>
  );
};

export default CommentForm;
