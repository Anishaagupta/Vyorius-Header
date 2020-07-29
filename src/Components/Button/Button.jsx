import React from 'react';
import './Btnstyle.css';

const Button = (props) => {
  return <button className='btn'>{props.name}</button>;
};
export default Button;
