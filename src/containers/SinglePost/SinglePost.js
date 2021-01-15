import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import './SinglePost.css';
import { AppContext } from '../../context/AppContext';
import Comments from './Comments/Comments';

const SinglePost = () => {
  const { id } = useParams();
  const {
    posts,
    users,
    comments,
    randomImage,
    postsLoadingStatus,
    userLoadingStatus,
    commentsLoadingStatus,
  } = useContext(AppContext);

  const singlePost = posts.find(post => post.id === +id);
  const user = users.find(user => user.id === singlePost?.userId);

  return (
    <div className='singlePost-container'>
      {postsLoadingStatus && userLoadingStatus && commentsLoadingStatus ? (
        <ClipLoader
          css='
            display: block;
            margin 0 auto;
          '
          size={150}
          color={'#123abc'}
          loading={postsLoadingStatus}
        />
      ) : (
        <>
          <header>
            <h1> singlePost.title</h1>

            {user && (
              <Link to={`/users/${user.id}`}>Author: {user.username}</Link>
            )}
          </header>
          <div className='singlePost-main'>
            <div>
              <img src={randomImage(id)} alt='post image' />
            </div>
            <p> {singlePost.body}</p>
          </div>
          <section className='singlePost-comments'>
            <Comments comments={comments} id={singlePost.userId} />
          </section>
        </>
      )}
    </div>
  );
};

export default SinglePost;
