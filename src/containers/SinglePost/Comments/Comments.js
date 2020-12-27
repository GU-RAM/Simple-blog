import React from 'react';

const Comments = ({ comments, id }) => {
  return (
    <>
      <h1>Comment Section</h1>
      {comments
        .filter(comment => comment.postId === id)
        .map(comment => {
          const { postId, name, body } = comment;
          return (
            <div key={postId}>
              <span>{name}</span>
              <p>{body}</p>
            </div>
          );
        })}
    </>
  );
};

export default Comments;
