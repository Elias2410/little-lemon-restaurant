import React from 'react'
import DishCard from './DishCard'
import GreekSalad from './assets/GreekSalad.jpg'
import Bruchetta from './assets/Bruchetta.jpg'
import LemonDessert from './assets/LemonDessert.jpg'

const Highlights = () => {
  return (
    <section className='container'>
        <h1>This week specials!</h1>
        <button>Order Online</button>
        <nav>
            <ul>
                <DishCard dishImage={GreekSalad} dishName="Greek salad" dishPrice="$12.99" dishDescription="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. " dishOrderOnline=""/>
                <DishCard dishImage={Bruchetta} dishName="Bruchetta" dishPrice="$5.99" dishDescription="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. " dishOrderOnline=""/>
                <DishCard dishImage={LemonDessert} dishName="Lemon Dessert" dishPrice="$5.00" dishDescription="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." dishOrderOnline=""/>
            </ul>
        </nav>
    </section>
  )
}

export default Highlights