import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './SinglePost.css';
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
    <div className='singlePost-container'>
      <header>
        <h1>{singlePost && singlePost.title}</h1>
        <button>Author: author username</button>
      </header>
      <div className='singlePost-main'>
        <div>
          <img src={randomImage(id)} alt='post image' />
        </div>
        <p>{singlePost && singlePost.body}</p>
      </div>
      <section className='singlePost-comments'>
        {singlePost && <Comments comments={comments} id={singlePost.userId} />}
      </section>
    </div>
  );
};

export default SinglePost;
