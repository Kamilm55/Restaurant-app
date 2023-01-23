import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <>
    <ul className='navbar'>
      <li><a href='./'><img src='/icons_assets/Logo.svg'/></a></li>
      <li><a><h1>Home</h1></a></li>
      <li><a><h1>About</h1></a></li>
      <li><a><h1>Menu</h1></a></li>
      <li><a><h1>Reservations</h1></a></li>
      <li><a><h1>Order</h1></a></li>
      <li><a><h1>Login</h1></a></li>
      {/* <li><a><img src='/icons_assets/Basket.svg'/></a></li> */}
    </ul>
    </>
  )
}

export default Nav