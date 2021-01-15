import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './UserPage.css';
import PostsLoader from '../../components/PostsLoader/PostsLoader';

const UserPage = () => {
  const { id } = useParams();
  const { users, posts, randomImage } = useContext(AppContext);

  const user = users.find(user => user.id === +id);
  const personelizedPost = posts.filter(post => post.userId === +id);

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
