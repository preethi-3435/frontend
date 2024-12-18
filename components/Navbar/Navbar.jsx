import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [menu, setMenu] = useState('menu');

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>Home</li>
        <li>About</li>
        <li>Our Services</li>
        <li>Benefits</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
      <button className="join-us"> Join Us Now </button>
    </div>
  );
};

export default Navbar;
