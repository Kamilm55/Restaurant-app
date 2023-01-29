import React from 'react'
import Footer from '../../Footer'
import Nav from '../../Nav'
import MUIdialog from '../MUIcomp/MUIdialog'
import MainBooking from './MainBooking'


const BookingPage = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const hasUser = (user !== null && Object.keys(user).length !== 0);

  return (
    <>
    <nav><Nav/></nav>
    <header><h1>BookingPage</h1></header>
    <main className='content100vh'>
      {hasUser ? <MainBooking /> : <MUIdialog hasUser={hasUser}/>}
      </main>
    <footer><Footer/></footer>
    </>
  )
}

export default BookingPage