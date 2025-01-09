import React from 'react'
import BikeIcon from './assets/bikeIcon.png'



const DishCard = (props) => {
  return (
    <div className='DishCardContainer'>
        <img src={props.dishImage} id='DishCardDishImg'/>
        <div className='DishCardNameAndPrice'>
          <h1 id='DishCardName'>{props.dishName}</h1>
          <h1 id='DishCardPrice'>{props.dishPrice}</h1>
        </div>
        <p id='DishCardDishDescription'>{props.dishDescription}</p>
        <div className='DishCardOrderOnlineAndBike'>
          <a href={props.dishOrderOnline}>Order Online</a>
          <img src={BikeIcon} id='BikeIcon'/>
        </div>
    </div>
  )
}

export default DishCard