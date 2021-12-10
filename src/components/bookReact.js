import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddNewBook from './addBook';
import DeleteButton from './deleteBook';
import { fetchBooks } from '../redux/books/books';
import './bookReact.css';

const DisplayBook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const bookStore = useSelector((state) => state.book.books);
  return (
    <div>
      <section>
        {bookStore.map((book) => (
          <div key={book.id} className="wrapper">
            <div className="book-info">
              <p className="category">
                {book.category}
              </p>
              <p className="title">
                {book.title}
              </p>
              <p className="author">
                Anonymous
              </p>
              <ul className="ulMenu">
                <li>Comments</li>
                <li><DeleteButton id={book.id} /></li>
                <li>Edit</li>
              </ul>
            </div>
            <div className="progress">
              <div className="circle" />
              <div>
                <p className="percentage">75%</p>
                <p className="progress-text">Completed</p>
              </div>
            </div>
            <div className="update-progress">
              <p className="current-chap">CURRENT CHAPTER</p>
              <p className="chapter">Chapter 8</p>
              <button type="button" className="update-button">UPDATE PROGRESS</button>
            </div>
          </div>
        ))}
      </section>
      <AddNewBook />
    </div>
  );
};

export default DisplayBook;
