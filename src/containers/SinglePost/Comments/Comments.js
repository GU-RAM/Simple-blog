import React from 'react';
import './Comments.css';

const Comments = ({ comments, id }) => {
  return (
    <>
      <h1>Comment Section</h1>
      {comments
        .filter(comment => comment.postId === id)
        .map(comment => {
          const { postId, name, body } = comment;
          return (
            <div key={postId} className='comment-wrapper'>
              <p>{name}</p>
              <p>{body}</p>
            </div>
          );
        })}
    </>
  );
};

export default Comments;
