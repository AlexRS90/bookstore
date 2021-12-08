import React from 'react';
import { useSelector } from 'react-redux';
import AddNewBook from './addBook';
import DeleteButton from './deleteBook';

const DisplayBook = () => {
  const bookStore = useSelector((state) => state.book.books);
  const ulMenu = {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    alignItems: 'center',
  };
  const deleteButton = {
    border: '2px solid teal',
    padding: '5px',
    cursor: 'pointer',
  };
  const wrapper = {
    border: '2px solid grey',
    marginBottom: '10px',
  };
  return (
    <div>
      <section>
        {bookStore.map((book) => (
          <div key={book.id} style={wrapper}>
            <p>
              Title:
              {book.title}
            </p>
            <p>
              Author:
              {book.author}
            </p>
            <ul style={ulMenu}>
              <li>Comments</li>
              <li style={deleteButton}><DeleteButton id={book.id} /></li>
              <li>Edit</li>
            </ul>
          </div>
        ))}
      </section>
      <AddNewBook />
    </div>
  );
};

export default DisplayBook;
