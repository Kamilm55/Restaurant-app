import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';
import BookingPage from './components/Booking/BookingPage';
import ConfirmedBooking from './components/Booking/ConfirmedBooking';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import OrderPage from './components/Order/OrderPage';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/booking' element={<BookingPage/>}></Route>
          <Route path='/confirming' element={<ConfirmedBooking/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/order' element={<OrderPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
