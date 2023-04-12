import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <header className="navMainContainer">
    <nav className="flex">
      <ul className="flex navUL">
        <li className="Bookstore-CMS">Bookstore CMS</li>
        <li>
          <NavLink className="BOOKS" to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink className="CATEGORIES" to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
      <div className="profile">
        <FaUser className="profileMask" />
      </div>
    </nav>
  </header>
);

export default Navbar;
