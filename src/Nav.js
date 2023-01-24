import React from 'react';
import './Nav.css';
import { Routes , Route  ,Link} from 'react-router-dom';

const Nav = () => {
  return (
    <>
  <ul className='navbar'>
        <li><Link to="/" ><img src='/icons_assets/Logo.svg' className='link'/></Link></li>
        <li><Link to="/" classname="link"><h1>Home</h1></Link></li>
        <li><Link to='/about'><h1>About</h1></Link></li>
        <li><a href='/icons_assets/menu.webp' className='link' target="_blank"><h1>Menu</h1></a></li>
        <li><Link to='/reservations'><h1>Reservations</h1></Link></li>
        <li><Link to='/order'><h1>Order</h1></Link></li>
        <li><Link to='/login'><h1>Login</h1></Link></li>
        {/* <li><a><img src='/icons_assets/Basket.svg'/></a></li> */}
      </ul>
    </>
  )
}

export default Nav