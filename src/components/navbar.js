import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import userLogo from './person_black_24dp.svg';

const Navbar = () => (
  <nav className="navbar-main">
    <h2>
      BookStore CMS
    </h2>
    <ul>
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/Categories">CATEGORIES</Link>
      </li>
    </ul>
    <div className="user-circle"><img className="icon" src={userLogo} alt="log in" /></div>
  </nav>
);

export default Navbar;
