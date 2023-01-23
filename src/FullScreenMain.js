import React from 'react'
import './Main.css'

const FullScreenMain = () => {
  return (
    <>
     <div className='main3' style={{backgroundColor:"#f4ce14"}}>
    <div className='content2'>
      <div className='title-content'>
    <h1 className='title' >Little Lemon</h1>
    <h2  className='headerText sub-title 'style={{color:"black"}} >Chicago</h2>
      </div>
      <div className='sub-content'>
    <p className='headerText plain-text 'style={{color:"black"}}> We are a family owned
    Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
    </p>
      </div>
    </div>

    <div className='imgWrapper'>
    <img className='main3Img imgUnder' src='/icons_assets/under.jpeg'/>
    <img className='main3Img imgOn ' src='/icons_assets/on.jpeg'/>
    </div>
      </div>
    </>
  )
}

export default FullScreenMain