import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SinglePost.css';
import { AppContext } from '../../context/AppContext';
import Comments from './Comments/Comments';

const SinglePost = () => {
  const { id } = useParams();
  const { posts, users, comments, randomImage } = useContext(AppContext);
  const [singlePost, setSinglePost] = useState([]);
  console.log('SinglePost -> singlePost', singlePost);
  const [user, setUser] = useState([]);
  console.log('SinglePost -> user', user);

  useEffect(() => {
    setSinglePost(posts.find(post => post.id === +id));
    setUser(users.find(user => user.id === singlePost?.userId));
  }, [posts, users, comments, user]);

  return (
    <div className='singlePost-container'>
      <header>
        <h1>{singlePost && singlePost.title}</h1>

        {user && (
          <Link to={`/users/${user.id}/${user.name}`}>
            Author: {user.username}
          </Link>
        )}
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
