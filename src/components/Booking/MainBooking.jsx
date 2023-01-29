import React from 'react'
import BookingForm from './BookingForm'
import BookingSlots from './BookingSlots';
import {fetchAPI} from '../../API'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const MainBooking = () => {
    const availableOccasions  =  ["Birthday" , "Anniversary" , "Other"];
    const [formikValues , setValues] = React.useState(JSON.parse(localStorage.getItem('reservations')) ?  [...JSON.parse(localStorage.getItem('reservations'))] : []) ;
    const initialState = fetchAPI(new Date())
  const navigate = useNavigate();

  function updateTimes  (state , action) {
      if(action.type === 'selected')
        return fetchAPI(action.formikDate);
      else if(action.type === 'submitted')
        return fetchAPI(action.values);
    }
    const [availableTimes , dispatch] = React.useReducer(updateTimes,initialState );

  console.log(formikValues);

    function deleteFunc(){
      localStorage.removeItem('reservations');
      window.location.reload();
    }

      useEffect(()=>{
        localStorage.setItem('reservations' , JSON.stringify(formikValues));
      },[formikValues])

    return (
    <>
      <BookingForm fetchAPI={fetchAPI} times={availableTimes} dispatch={dispatch} formikValues={formikValues} setValues={setValues} occasions={availableOccasions}/>
        {formikValues ?  <BookingSlots formikValues={formikValues} /> : null}
        {formikValues.length > 0 ? <div> <Button variant='contained' size='large'  style={{margin:"10px auto"}} 
        onClick={()=> navigate('/confirming')}>Confirm Bookings</Button>
          <Button variant='contained' color='error' size='large' onClick={()=>deleteFunc()}>Clear all</Button>
        </div> : null}

    </>
  )
}

export default MainBooking