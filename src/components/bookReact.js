import React, { useState } from 'react';
import Books from './books';
import AddNewBook from './addBook';

const DisplayBook = () => {
  const [book] = useState(Books);
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
        {book.map((book) => (
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
              <li style={deleteButton}>Remove</li>
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
