import React, { useState } from 'react';

const dummyBooks = [
  {
    id: 123,
    title: 'This is a book title',
    auhor: 'Alex',
  },
];

const DisplayBook = () => {
  const [book, setBook] = useState(dummyBooks);
  return (
    <div>
      <section>
        <p>{book[0].title}</p>
        <ul>
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </section>
      <section>
        <form>
          <h2>Add a new book</h2>
          <input type="text" placeholder="Book Title" />
          <select name="Categories">
            <option>Aciton</option>
            <option>Races</option>
          </select>
          <input type="submit" value="Add Book" onClick={() => setBook((book) => [...book])} />
        </form>
      </section>
    </div>
  );
};

export default DisplayBook;
