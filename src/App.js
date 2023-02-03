import React from 'react';
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';
import About from './components/About/About';
import BookingPage from './components/Booking/BookingPage';
import ConfirmedBooking from './components/Booking/ConfirmedBooking';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import OrderPage from './components/Order/OrderPage';
import MuiContextProvider from './Context/MuiContextProvider';

function App() {

  return (
    <div className='App'>
      <MuiContextProvider>

     
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>

          <Route path='/about' element={
             <React.Suspense fallback={<>...</>} >
                <About />
              </React.Suspense>}></Route>

          <Route path='/booking' element={
             <React.Suspense fallback={<>...</>} >
                <BookingPage />
              </React.Suspense>}></Route>

          <Route path='/confirming' element={
             <React.Suspense fallback={<>...</>} >
          <ConfirmedBooking/>
              </React.Suspense>
          }></Route>

          <Route path='/login' element={
           <React.Suspense fallback={<>...</>} >
            <Login/>
         </React.Suspense>
        }></Route>

          <Route path='/register' element={
           <React.Suspense fallback={<>...</>} >
             <Register/>
         </React.Suspense>
          }></Route>

          <Route path='/order' element={
            <React.Suspense fallback={<>...</>} >
              <OrderPage/>
           </React.Suspense>
          }></Route>

        </Routes>
      </Router>
      </MuiContextProvider>
    </div>
  );
}

export default App;
