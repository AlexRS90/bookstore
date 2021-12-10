import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/books';
import './bookReact.css';

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button className="deleteButton" type="button" onClick={() => dispatch(removeBookAsync(id))}>Remove</button>
    </div>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteButton;
