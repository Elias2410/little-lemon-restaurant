import React, { useEffect } from 'react'
import CheckMark from './assets/CheckMark.png'
import { useNavigate } from "react-router-dom";

const BookingConfirmationPage = ({userName}) => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, []);

    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate("/")
    }
  return (
    <div id="BookingConfirmationPage">
        <img style={{display:"flex",flexDirection:"column",width:"250px",height:"225px"}} src={CheckMark}/>
        <h1 id="BookingConfirmationPageMessage" className='text-font primary-color'>Confirmed!! Your Booking is Completed</h1>
        <h2 className='text-font primary-color'>Will reach you soon for updates</h2>
        <button id="BookingConfirmPageBtn" type="submit" onClick={handleClick}>Return to Home Page</button>
    </div>
  )
}

export default BookingConfirmationPage