import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const DeleteButton = ({id}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
    </div>
  );
};

DeleteButton.prototype = {
  id: PropTypes.string.isRequired,
};

export default DeleteButton;
