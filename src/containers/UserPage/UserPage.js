import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './UserPage.css';
import PostsLoader from '../../components/PostsLoader/PostsLoader';

const UserPage = () => {
  const { id } = useParams();
  const { users, posts, randomImage } = useContext(AppContext);
  const [user, setUser] = useState([]);
  const [personelizedPost, setPersonelizedPost] = useState([]);

  useEffect(() => {
    setUser(users.find(user => user.id === +id));
    setPersonelizedPost(posts.filter(post => post.userId === +id));
  }, [posts, users]);

  return (
    <div className='userPage-container'>
      <section className='userPage__main'>
        <div className='userPage__main-info'>
          <h1>Information about author</h1>
          <p>Name: {user && user.name}</p>
          <p>Username: {user && user.username}</p>
          <p>Email: {user && user.email}</p>
        </div>
        <div className='userPage__main-img'>
          <img src={randomImage(id)} alt='' />
        </div>
      </section>
      <section className='userPage__posts-container'>
        <PostsLoader posts={personelizedPost} randomImage={randomImage} />
      </section>
    </div>
  );
};

export default UserPage;
