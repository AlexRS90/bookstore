import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar-main">
    <h2>
      BookStore
    </h2>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/Categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
