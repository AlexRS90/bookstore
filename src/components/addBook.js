import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import { v4 as uuidv4 } from "uuid";

const AddNewBook = () => {
  const dispatch = useDispatch();
  return (
    <section>
      <form onSubmit={(e) => submitBookToStore(e, dispatch)}>
        <h2>Add a new book</h2>
        <input type="text" id="book-title" required placeholder="Book Title" />
        <input type="text" id="book-author" required placeholder="Book Author" />
        <select name="Categories">
          <option>Action</option>
          <option>Drama</option>
          <option>Scy-Fi</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
};

const submitBookToStore = (e, dispatch) => {
  e.preventDefault();
  const newBook = {
    id: uuidv4(),
    title: document.getElementById('book-title').value,
    author: document.getElementById('book-author').value,
  }
  document.getElementById('book-title').value = '';
  document.getElementById('book-author').value = '';
  dispatch(addBook(newBook));
};

export default AddNewBook;
