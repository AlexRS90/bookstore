import React from 'react';

const AddNewBook = () => (
  <section>
    <form>
      <h2>Add a new book</h2>
      <input type="text" placeholder="Book Title" />
      <select name="Categories">
        <option>Action</option>
        <option>Drama</option>
        <option>Scy-Fi</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  </section>
);

export default AddNewBook;