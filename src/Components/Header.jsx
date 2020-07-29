import React from 'react';
import './HeaderStyle.css';
import logo from '../assets/c.png';
import name from '../assets/b.png';
import pic from '../assets/a.png';

const Header = () => {
  return (
    <div>
      <div className='header'>
        <img src={logo} alt='images' className='logo1' />
        <div className='sec'>
          <img src={name} alt='logoimg' className='logo2' />
        </div>
      </div>
      <div className='container'>
        <div className='main'>
          <img src={pic} alt='img' className='logo3' />
          <div className='text'></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
