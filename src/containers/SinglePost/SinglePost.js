import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Comments from './Comments/Comments';

const SinglePost = () => {
  const { id } = useParams();
  const { posts, users, comments, randomImage } = useContext(AppContext);
  const [singlePost, setSinglePost] = useState([]);

  useEffect(() => {
    setSinglePost(posts.find(post => post.userId === +id));
  }, [posts, users, comments]);

  return (
    <>
      <h1>{singlePost && singlePost.title}</h1>
      <span>
        <img src={randomImage(id)} alt='post image' />
      </span>
      <p>{singlePost && singlePost.body}</p>
      <p>{singlePost && singlePost.title}</p>
      <section>
        {singlePost && <Comments comments={comments} id={singlePost.userId} />}
      </section>
    </>
  );
};

export default SinglePost;
