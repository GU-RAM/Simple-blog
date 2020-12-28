import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SinglePost.css';
import { AppContext } from '../../context/AppContext';
import Comments from './Comments/Comments';

const SinglePost = () => {
  const { id } = useParams();
  const { posts, users, comments, randomImage } = useContext(AppContext);
  const [singlePost, setSinglePost] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setSinglePost(posts.find(post => post.userId === +id));
    setUser(users.find(user => user.id === +id));
  }, [posts, users, comments]);

  return (
    <div className='singlePost-container'>
      <header>
        <h1>{singlePost && singlePost.title}</h1>
        <Link to={`/posts/${id}/${user.name}`}>Author: author username</Link>
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
