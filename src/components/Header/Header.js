import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Config from '../../config/routes';

const Header = () => {
  return (
    <header className='main-header'>
      <h1>Simple Blog</h1>
      <nav className='main-nav'>
        <NavLink to={Config.MAIN}>Home</NavLink>
      </nav>
    </header>
  );
};

export default Header;
