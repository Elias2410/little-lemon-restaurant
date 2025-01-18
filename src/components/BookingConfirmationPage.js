import React from 'react'
import CheckMark from './assets/CheckMark.png'
import { useNavigate } from "react-router-dom";

const BookingConfirmationPage = ({userName}) => {

    const navigate = useNavigate()
    
    const handleClick = ()=>{
        navigate("/")
    }
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <img style={{display:"flex",flexDirection:"column",width:"250px",height:"225px"}} src={CheckMark}/>
        <h1>Confirmed {userName}!! Your Booking is Completed</h1>
        <h2>Will reach you soon for updates</h2>
        <button id="BookingConfirmPageBtn" type="submit" onClick={handleClick}>Return to Home Page</button>
    </div>
  )
}

export default BookingConfirmationPage