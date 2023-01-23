import React from 'react'
import './Footer.css'

const Footer = () => {
 

  return (
    <div className='footer'>
      <div><img src='/icons_assets/LOGO.png'  className='f-img'/></div>
      <div >
          <h2 className='title  headerText'>Navigation</h2>
          <a className='f-link'>Home</a>
          <a className='f-link'>About</a>
          <a className='f-link'>Menu</a>
          <a className='f-link'>Reservations</a>
          <a className='f-link'>Order</a>
          <a className='f-link'>Login</a>
      </div>
      <div>
      <h2 className='title headerText'>Contact</h2>
          <p className='plain-text headerText'>2395 Maldove Way,
Chicago Illinois</p>
          <p className='plain-text headerText'>(629)-243-6827</p>
          <a className='f-link'>info@littlelemon.com</a>
      </div>
      <div>
      <h2 className='title headerText'>Connect</h2>
          <a className='f-link'>Facebook</a>
          <a className='f-link'>Instagram</a>
          <a className='f-link'>Join us!</a>
      </div>
    </div>
  )
}

export default Footer