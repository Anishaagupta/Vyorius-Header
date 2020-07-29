import React from 'react';
import './HeaderStyle.css';
import Image from './Image';
import logo from '../assets/c.png';
import name from '../assets/b.png';

const Header = () => {
  return (
    <div>
      <div className='header'>
        <Image img={logo} className='logo1' />
        <Image img={name} className='logo2' />
      </div>
    </div>
  );
};

export default Header;
