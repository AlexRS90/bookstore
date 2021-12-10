import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/books';
import './addBook.css';

const submitBookToStore = (e, dispatch) => {
  e.preventDefault();
  const newBook = {
    id: uuidv4(),
    title: document.getElementById('book-title').value,
    category: e.target.Categories.value,
  };
  document.getElementById('book-title').value = '';
  dispatch(addBookAsync(newBook));
};

const AddNewBook = () => {
  const dispatch = useDispatch();
  return (
    <section>
      <form className="add-book-form" onSubmit={(e) => submitBookToStore(e, dispatch)}>
        <h2 className="add-book-title">ADD NEW BOOK</h2>
        <input className="text-area" type="text" id="book-title" required placeholder="Book Title" />
        <select className="select-cat" name="Categories">
          <option disabled selected>Category</option>
          <option>Action</option>
          <option>Drama</option>
          <option>Scy-Fi</option>
          <option>Fantasy</option>
          <option>Manga</option>
          <option>Detective and Mystery</option>
          <option>Self-Care</option>
        </select>
        <button className="add-btn" type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default AddNewBook;
