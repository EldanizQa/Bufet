import React, { useState } from "react";
import "./Comment.css";
import Comment from "./Comment";
import CommentForm from "./CommentFrom";
const CommentBox = () => {
  const [showComments, setsShowComments] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "landiggity",
      body: "This is my first comment on this forum so don't be a dick",
    },
    {
      id: 2,
      author: "scarlett-jo",
      body: "That's a mighty fine comment you've got there my good looking fellow...",
    },
    {
      id: 3,
      author: "rosco",
      body: "What is the meaning of all of this 'React' mumbo-jumbo?",
    },
  ]);

  const _addComment = (author, body) => {
    const comment = {
      id: comments.length + 1,
      author,
      body,
    };
    setComments([...comments, comment]);
  };

  const _handleClick = () => {
    setsShowComments({
      showComments: !showComments,
    });
  };

  const _getComments = () => {
    return comments.map((comment) => {
      return (
        <Comment author={comment.author} body={comment.body} key={comment.id} />
      );
    });
  };

  const _getCommentsTitle = (commentCount) => {
    if (commentCount === 0) {
      return "No comments yet";
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  };

  const commentss = _getComments();
  let commentNodes;
  let buttonText = "Show Comments";

  if (showComments) {
    buttonText = "Hide Comments";
    commentNodes = <div className="comment-list">{commentss}</div>;
  }

  return (
    <div className="comment-box">
      <h2>Join the Discussion!</h2>
      <CommentForm addComment={_addComment} />
      <button id="comment-reveal" onClick={_handleClick}>
        {buttonText}
      </button>
      <h3>Comments</h3>
      <h4 className="comment-count">{_getCommentsTitle(commentss.length)}</h4>
      {commentNodes}
    </div>
  );
};

export default CommentBox;
