import React from 'react'
import FullScreenMain from './FullScreenMain'
import './Main.css'
const Main = () => {
  const cardArr = [
    {title:"Greek ",
    description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    price: 12.99 ,
    imgUrl:"/greek-salad.jpg"
  },
    {title:"Brushetta ",
    description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
    price: 7.99 ,
    imgUrl:"/bruchetta.svg"
  },
    {title:"Grilled Fish ",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    price: 12.99 ,
    imgUrl:"/fish.jpeg"
  }
  ]

  const cards2 = [
  {
    userName:"Micheal Caldwell",
    description:"This is the best Mediterranean food that I've ever had!",
  },
  {
    userName:"John Rosenblum",
    description:"This is the best Mediterranean food that I've ever had!",
  },
  {
    userName:"Alan Chen",
    description:"I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.",
  },
  {
    userName:"Casey Lau",
    description:"The food here was fire!! Everyone should try this place out at least once if they live in Chicago.",
  },
  {
    userName:"John Rosenblum",
    description:"This is the best Mediterranean food that I've ever had!",
  },
  {
    userName:"Jack Hu",
    description:"This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!",
  },
  {
    userName:"Casey Lau",
    description:"This is the best Mediterranean food that I've ever had!",
  },
  {
    userName:"Alan Chen",
    description:"I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.",
  },
  ]
  return (
    <div className='main '>
      <h1 className='title'>This weeks specials</h1>
      <button  className='primaryButton' style={{border:"0px",borderRadius:"8px"}}><h2><a href='/icons_assets/menu.webp' className='link' target="_blank">Online Menu</a></h2></button>
    <div className='card-group'>
    {cardArr.map(card => {
      return (
        <div className='card'>
      <img className='main-img' src={`/icons_assets/${card.imgUrl}`}/>
      <h2 className='sub-title'>{card.title}</h2>
      <h3 className='sub-title'>${card.price}</h3>
      <p className='plain-text'>{card.description}</p>
      <button className='primaryButton' style={{border:"0px",borderRadius:"8px"}}>Order for Delivery</button>
      </div>)
    })}
    </div>

      <div className='main2'>
        <h1 className='title'>Testimonials</h1>
          <div className='main2Cards card-group'>
              {cards2.map(card => {
                return (
                  <div className='card'>
                <img className='card2img' src={`/icons_assets/download.png`}/>
                <h2 className='sub-title'>{card.userName}</h2>
                <p className='plain-text'>{card.description}</p>
                  </div>
                )
              })}
          </div>
      </div>

      </div>
  )
}

export default Main