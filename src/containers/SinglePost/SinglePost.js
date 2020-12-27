import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Comments from './Comments/Comments';

const SinglePost = () => {
  const { id } = useParams();
  const { posts, users, comments } = useContext(AppContext);
  const [singlePost, setSinglePost] = useState([]);
  // const [singleComment, setSingleComment] = useState();

  useEffect(() => {
    setSinglePost(posts.find(post => post.userId === +id));
  }, [posts, users, comments]);
  return (
    <>
      <h1>{singlePost && singlePost.title}</h1>
      <p>{singlePost && singlePost.body}</p>
      <p>{singlePost && singlePost.title}</p>
      <section>
        {singlePost && <Comments comments={comments} id={singlePost.userId} />}
      </section>
    </>
  );
};

export default SinglePost;
