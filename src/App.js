import './App.css';
import Footer from './Footer';
import FullScreenMain from './FullScreenMain';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
  <nav><Nav/></nav>

  <header><Header/></header>

    <main>
      <Main/>
      <FullScreenMain/>
    </main>
    
    <footer><Footer/></footer>

    </div>
  );
}

export default App;
