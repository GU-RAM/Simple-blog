import React, { useState } from 'react';
import './Comments.css';
import { useParams } from 'react-router-dom';
import CommentForm from '../../../components/CommentForm/CommentForm';
import Modal from '../../../components/Modal/Modal';

const Comments = ({ comments }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const { id: paramId } = useParams();

  return (
    <>
      <h1 className='comment-header'>
        <span>Comment Section</span>
        <button onClick={() => setDisplayModal(!displayModal)}>
          Add Comment
        </button>
        {displayModal && (
          <Modal>
            <CommentForm modalHandler={setDisplayModal} />
          </Modal>
        )}
      </h1>
      {comments
        .filter(comment => comment.postId.toString() === paramId.toString())
        .map(comment => {
          const { id, name, body } = comment;
          return (
            <div key={id} className='comment-wrapper'>
              <p>{name}</p>
              <p>{body}</p>
            </div>
          );
        })}
    </>
  );
};

export default Comments;
