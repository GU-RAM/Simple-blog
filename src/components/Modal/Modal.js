import React, { useState, useReducer, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import './Modal.css';
import { AppContext } from '../../context/AppContext';

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

const initialState = {
  name: '',
  email: '',
  body: '',
};

const Modal = ({ modalHandler }) => {
  const { id } = useParams();
  const [warning, setWarning] = useState('');
  const { addNewComment } = useContext(AppContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { name, email, body } = state;

  useEffect(() => {
    return () => setWarning('');
  }, [name, email, body]);

  const onChange = e => {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = e => {
    if (!name || !email || !body) {
      setWarning('Fields are not completed');
      e.preventDefault();
    } else {
      addNewComment({ ...state, postId: +id });
      modalHandler(false);
      e.preventDefault();
    }
  };

  return (
    <div className='modal'>
      <form className='content' onSubmit={e => handleSubmit(e)}>
        <input
          required
          type='text'
          name='name'
          id='user-name'
          onChange={onChange}
          value={name}
          placeholder={'name'}
        />
        <input
          required
          type='email'
          name='email'
          id='user-email'
          onChange={onChange}
          value={email}
          placeholder={'email'}
        />
        <textarea
          required
          type='text'
          onChange={onChange}
          name='body'
          id='user-comment'
          cols='30'
          rows='10'
          value={body}
          placeholder={'comment'}
        />
        <h4 className='warning-text'>{warning ? warning : null}</h4>
        <button type='submit'>Submit</button>
        <button onClick={() => modalHandler(false)}>Close</button>
      </form>
    </div>
  );
};

export default Modal;
