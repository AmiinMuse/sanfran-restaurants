// src/components/Header.js
import React from 'react';
import logo from '../img/logo.webp';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>San Francisco Restaurants</span>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/types">Types</a></li>
          <li><a href="/hitlist">Hit-List</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
