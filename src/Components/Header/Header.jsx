import React from 'react';
import './HeaderStyle.css';
import pic from '../../assets/a.png';
import logo from '../../assets/c.png';
import name from '../../assets/b.png';
import Button from '../Button/Button';

const Header = () => {
  return (
    <div>
      <div className='header'>
        <img src={logo} alt='images' className='logo1' />
        <div className='sec'>
          <img src={name} alt='logo_img' className='logo2' />
          <div className='list'>
            <ul>
              <li className='list1'>Why Vyorius?</li>
              <li className='list1'>Solutions</li>
              <li className='list1'>Product</li>
              <li className='list1'>Use Cases</li>
              <li className='list1'>Team</li>
              <li className='list1'>Partners</li>
              <li className='list1'>Contact us</li>
            </ul>
          </div>
        </div>
        <Button className='btn1' name='Launch Vyorius' />
      </div>
      <div>
        <div className='text'>
          <img src={pic} alt='img' className='logo3' />
          <h6 className='h6-text'>CONNECTING THE DISCONNECTED</h6>
          <h1 className='text-h1'>
            <span className='vy'>Vyorius </span>brings unmanned
            <br /> robots &nbsp;
            <span className='vy'>
              together,
              <br />
            </span>
            where ever they are
          </h1>
          <p className='text-p1'>
            With all of the operations commanding and maintanence
            <br /> tools in one place, unmanned vehicles will stay connected
            <br /> and productive when no matter where you are deliverying.
          </p>
          <div className='btn3'>
            <Button name='Try Vyorus' />
            <Button name='One More' className='two' />
          </div>
          <p className='text-p2'>
            Need to order a delivery?
            <span className='text-span'>
              <a href='#'> Get Help </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
