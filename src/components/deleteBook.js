import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const DeleteButton = (props) => {
  const dispatch = useDispatch();
  const { id } = props;
  return (
    <div>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
    </div>
  );
};

DeleteButton.prototype = {
  props: PropTypes.string.isRequired,
};

export default DeleteButton;
