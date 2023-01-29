import React from 'react';
import './Nav.css';
import { Link} from 'react-router-dom';

const Nav = () => {
  return (
    <>
  <ul className='navbar'>
        <li><Link to="/" ><img src='/icons_assets/Logo.svg' className='link link-center' alt='img'/></Link></li>
        <li><Link to="/"  className='link-center'><h1>Home</h1></Link></li>
        <li><Link to='/about' className='link-center'><h1>About</h1></Link></li>
        <li><a href='/icons_assets/menu.webp' className='link link-center' target="_blank"><h1>Menu</h1></a></li>
        <li><Link to='/booking' className='link-center'><h1>Reservations</h1></Link></li>
        <li><Link to='/order' className='link-center'><h1>Order</h1></Link></li>
        <li><Link to='/login' className='link-center'><h1>Login</h1></Link></li>
        {/* <li><a><img src='/icons_assets/Basket.svg'/></a></li> */}
      </ul>
    </>
  )
}

export default Nav