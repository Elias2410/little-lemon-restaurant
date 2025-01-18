import React from 'react'
import ReserveTable from './assets/ReservTable.jpg'
import BookingForm from './BookingForm'
import { Link } from 'react-router-dom';

const BookingPage = ({state,dispatch}) => {
  return (
    <div className='BookingPageContainer'>
        <header className='ReserveTableHeader'>
            <div id="ReserveTableHeaderLeftSide">
              <h1 id="ReserveTableHeaderTitle" className='title-font secondary-color'>Reserve a Table</h1>
              <p id="ReserveTableHeaderParagraph" className='text-font paragraph'>To ensure we have a table ready for you, please fill out the reservation form with your details. This helps us provide the best dining experience tailored to your needs. Reservations are confirmed via email or phone after submission.</p>
            </div>
            <div id="ReserveTableHeaderRightSide">
                <img id="ReserveTableHeaderImg" src={ReserveTable} alt="Reserve Table"/>
            </div>
        </header>
        <BookingForm state={state} dispatch={dispatch}/>
    </div>
  )
}

export default BookingPage