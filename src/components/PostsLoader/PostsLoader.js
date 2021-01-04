import React, { useState } from 'react';
import Post from './Post/Post';

const PostsLoader = ({ posts, randomImage }) => {
  console.log('PostsLoader -> posts', posts);
  const [numberOfPosts, setNumberOfPosts] = useState(12);

  const displayMorePostsHandler = () => {
    setNumberOfPosts(prevNumberOfPosts => prevNumberOfPosts + 12);
  };

  return (
    <>
      <ul className='posts-container'>
        {posts.slice(0, numberOfPosts).map(post => {
          return (
            <li key={post.id} className='post'>
              <Post post={post} randomImage={randomImage} />
            </li>
          );
        })}
      </ul>
      {numberOfPosts >= posts.length ? null : (
        <button onClick={displayMorePostsHandler} className='post--loader'>
          Load More
        </button>
      )}
    </>
  );
};

export default PostsLoader;
