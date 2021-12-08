import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const DeleteButton = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
        <button type="button" onClick={() => dispatch(removeBook(props.id))}>Remove</button>
    </div>
  );
};

export default DeleteButton;
