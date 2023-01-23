import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
     
    <div className='content'>
      <div className='title-content'>
    <h1 className='title' style={{color:"#F4CE14"}}>Little Lemon</h1>
    <h2  className='headerText sub-title'>Chicago</h2>
      </div>
      <div className='sub-content'>
    <p className='headerText plain-text'> We are a family owned
     Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
    <button className='primaryButton'  style={{backgroundColor:"#F4CE14"}}><h3>Reserve a table</h3></button>
      </div>
    </div>
    <img className='main-img' src='/icons_assets/Mario and Adrian A.jpg'/>

    </div>
  )
}

export default Header