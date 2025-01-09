import React from 'react'


const DishCard = (props) => {
  return (
    <div className='container'>
        <img src={props.dishImage}/>
        <h1>{props.dishName}</h1>
        <h1>{props.dishPrice}</h1>
        <p>{props.dishDescription}</p>
        <a href={props.dishOrderOnline}>Order Online</a>
        <img src=""/>
    </div>
  )
}

export default DishCard