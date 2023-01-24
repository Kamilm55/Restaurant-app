import React from 'react'
import BookingForm from './BookingForm'
import BookingSlots from './BookingSlots';

const MainBooking = () => {
    const availableOccasions  =  ["Birthday" , "Anniversary" , "Other"];
    const [formikValues , setValues] = React.useState([]);
    const initialState = ['17:00','18:00','19:00','20:00','21:00','22:00'];
    function updateTimes  (state , action) {
        if(action.type === 3)
        return ['17:00','19:00','20:00',];
        else if(action.type === 2)
        return ['17:00','20:00',];
        else if(action.type === 1)
        return ['22:00',];
        else if(action.type === 4)
        return ['17:00','19:00','20:00','21:00'];
        else return ['17:00','18:00','19:00','20:00','21:00','22:00'];
    }

    const [availableTimes , dispatch] = React.useReducer(updateTimes,initialState );

  return (
    <>
      <BookingForm times={availableTimes} dispatch={dispatch} formikValues={formikValues} setValues={setValues} occasions={availableOccasions}/>
        {formikValues ?  <BookingSlots formikValues={formikValues} /> : null}
    </>
  )
}

export default MainBooking