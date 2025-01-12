import React from 'react'
import ReserveTable from './assets/ReservTable.jpg'
import BookingForm from './BookingForm'

const BookingPage = () => {
  return (
    <div className='BookingPageContainer'>
        <header className='ReserveTableHeader'>
            <div id="ReserveTableHeaderLeftSide">
                <h1 id="ReserveTableHeaderTitle">Reserv a Table</h1>
                <p id="ReserveTableHeaderParagraph">To ensure we have a table ready for you, please fill out the reservation form with your details. This helps us provide the best dining experience tailored to your needs. Reservations are confirmed via email or phone after submission.</p>
            </div>
            <div id="ReserveTableHeaderRightSide">
                <img id="ReserveTableHeaderImg" src={ReserveTable}/>
            </div>
        </header>
        <BookingForm/>
    </div>
  )
}

export default BookingPage