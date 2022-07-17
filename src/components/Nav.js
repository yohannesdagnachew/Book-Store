import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <div className="header">
    <ul className="nav">
      <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      <li className="nav-item">
        <NavLink className="nav-links nav-book" to="/">
          BOOKS
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-links nav-categories" to="categories">
          CATEGORIES
        </NavLink>
      </li>
    </ul>
    <button className="person" type="button"><span className="material-icons primary-color">person</span></button>
  </div>
);
export default Nav;
