import React from 'react'
import Footer from '../../Footer'
import Nav from '../../Nav'
import MainBooking from './MainBooking'

const BookingPage = () => {
  return (
    <>
   <nav><Nav/></nav>
    <header><h1>BookingPage</h1></header>
    <main><MainBooking /></main>
    <footer><Footer/></footer>
    </>
  )
}

export default BookingPage