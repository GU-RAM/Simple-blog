import React, { useState, useContext } from 'react';
import './Posts.css';
import Post from '../../components/Post/Post';
import { AppContext } from '../../context/AppContext';

const PostsContainer = () => {
  const { posts, randomImage } = useContext(AppContext);
  const [numberOfPosts, setNumberOfPosts] = useState(12);

  const displayMorePostsHandler = () => {
    setNumberOfPosts(prevNumberOfPosts => prevNumberOfPosts + 12);
  };

  return (
    <div className='posts-wrapper'>
      <ul className='posts-container'>
        {posts.slice(0, numberOfPosts).map(posts => {
          return (
            <li key={posts.id} className='post'>
              <Post posts={posts} randomImage={randomImage} />
            </li>
          );
        })}
      </ul>
      {numberOfPosts >= posts.length ? null : (
        <button onClick={displayMorePostsHandler} className='post--loader'>
          Load More
        </button>
      )}
    </div>
  );
};

export default PostsContainer;
