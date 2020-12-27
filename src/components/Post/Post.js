import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ posts }) => {
  const { userId, title, body } = posts;
  return (
    <>
      <h1>{title}</h1>
      <div>{body}</div>
      <Link to={`/posts/${userId}`}>Read More</Link>
    </>
  );
};

export default Post;
