import React from 'react'
import Footer from '../../Footer';
import FullScreenMain from '../../FullScreenMain';
import Header from '../../Header';
import Main from '../../Main';
import Nav from '../../Nav';

const HomePage = () => {
  return (
    <>
     <nav><Nav/></nav>

    <header><Header/></header>

      <main>
        <Main/>
        <FullScreenMain/>
      </main>

    <footer><Footer/></footer>
    </>
  )
}

export default HomePage