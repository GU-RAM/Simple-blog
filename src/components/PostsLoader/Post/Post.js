import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ post, randomImage }) => {
  const { title, id } = post;
  return (
    <>
      <h3>
        {title.length > 19 ? title.substr(1, 17) + '..' : title.substr(1, 20)}
      </h3>
      <div>
        <img src={randomImage(id)} alt='post image' />
      </div>
      <Link to={`/posts/${id}`} className='link'>
        Read More
      </Link>
    </>
  );
};

export default Post;
