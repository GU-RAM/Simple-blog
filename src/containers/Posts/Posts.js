import React, { useContext } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import './Posts.css';
import PostsLoader from '../../components/PostsLoader/PostsLoader';
import { AppContext } from '../../context/AppContext';

const PostsContainer = ({ personelizedPost }) => {
  const { posts, randomImage, postsLoadingStatus } = useContext(AppContext);

  return (
    <div className='posts-wrapper'>
      {postsLoadingStatus ? (
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
        <div>
          <PostsLoader
            posts={posts}
            randomImage={randomImage}
            personelizedPost={personelizedPost}
          />
        </div>
      )}
    </div>
  );
};

export default PostsContainer;
