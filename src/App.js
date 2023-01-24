import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';
import BookingPage from './components/Booking/BookingPage';
import HomePage from './components/HomePage';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/booking' element={<BookingPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
