import { Route, BrowserRouter as Router, Routes ,Link } from 'react-router-dom';
import HomePage from './components/HomePage';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          {/* <Route path='/booking' element={</>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
