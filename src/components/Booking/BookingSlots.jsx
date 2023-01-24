import React from 'react'
import uuid from "react-uuid";

const BookingSlots = ({formikValues}) => {
    console.log(formikValues);
  return (
    <>
            <h2>Your reservations</h2>
        {formikValues.map(slot =>{
            return(
                <div key={uuid()} className="card">
                    <p className='plain-text'>Date: {slot.date}</p>
                    <p className='plain-text'>Time: {slot.time}</p>
                    <p className='plain-text'>Number of Guests: {slot.number}</p>
                    <p className='plain-text'>Occasion: {slot.occasion}</p>

                </div>
            )
        })}   
    </>
  )
}

export default BookingSlots