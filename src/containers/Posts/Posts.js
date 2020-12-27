import React, { useState, useContext } from 'react';
import Post from '../../components/Post/Post';
import { AppContext } from '../../context/AppContext';

const PostsContainer = () => {
  const { posts } = useContext(AppContext);
  const [numberOfPosts, setNumberOfPosts] = useState(12);

  const displayMorePostsHandler = () => {
    setNumberOfPosts(prevNumberOfPosts => prevNumberOfPosts + 12);
  };

  return (
    <>
      <ul>
        {posts.slice(0, numberOfPosts).map(posts => {
          return (
            <li key={posts.id}>
              <Post posts={posts} />
            </li>
          );
        })}
        <button onClick={displayMorePostsHandler}>Load More</button>
      </ul>
    </>
  );
};

export default PostsContainer;
