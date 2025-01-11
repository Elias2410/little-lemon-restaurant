import React from 'react'
import ReserveTable from './assets/ReservTable.jpg'
import CustomerDetails from './assets/CustomerDetails.jpg'

const BookingPage = () => {
    const containerStyle = {
        position:"relative",
        width:"25%",
        height:"150px",
        display:"flex",
      };
      const img1Style = {
        position:"absolute",
        top:0,
        left:0,
        width:"100%",
        height:"100%",
        objectFit:"cover",
        zIndex: 1,
        borderRadius:"25px"
      };
      const img2Style = {
        position:"absolute",
        top:"50px",
        right:"50px",
        width:"100%",
        height:"100%",
        objectFit:"cover",
        zIndex: 2,
        borderRadius:"25px"
      };
      const img3Style = {
        position:"absolute",
        top:"100px",
        right:"-20px",
        width:"100%",
        height:"100%",
        objectFit:"cover",
        zIndex: 2,
        borderRadius:"25px"
      };
  return (
    <div className='BookingPageContainer'>
        <section className='ReserveTableHeader'>
            <div id="ReserveTableHeaderLeftSide">
                <h1 id="ReserveTableHeaderTitle">Reserv a Table</h1>
                <p id="ReserveTableHeaderParagraph">To ensure we have a table ready for you, please fill out the reservation form with your details. This helps us provide the best dining experience tailored to your needs. Reservations are confirmed via email or phone after submission.</p>
            </div>
            <div id="ReserveTableHeaderRightSide">
                <img id="ReserveTableHeaderImg" src={ReserveTable}/>
            </div>
        </section>
        <section className='CustomerDetails'>
            <div id="CustomerDetailsLeftSide">
                <h1 id="CustomerDetailsTitle">Customer Details</h1>
                <label htmlFor='FullName'>Full Name:</label>
                <input id='FullName' type='text'></input>
                <label htmlFor='EmailAddress'>Email Address:</label>
                <input id='EmailAddress' type='email'></input>
                <label htmlFor='PhoneNumbe'>Phone Numbe:</label>
                <input id='PhoneNumber' type='number'></input>
            </div>
            <div id="CustomerDetailsRightSide">
                <img id="CustomerDetailsImg" src={CustomerDetails}/>
            </div>
        </section>
        <section className='ReservationDetails'>
            <div id="ReservationDetailsLeftSide">
                <h1 id="ReservationDetailsTitle">Reservation Details</h1>
                <label htmlFor='DateOfReservation'>Date of Reservation:</label>
                <input type='date' id='DateOfReservation'></input>
                <label htmlFor='TimeOfReservation'>Time of Reservation:</label>
                <input type='time' id='TimeOfReservation'></input>
                <label htmlFor='NumberOfGuests'>Number of Guests:</label>
                <select id='NumberOfGuests'>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
            <div id="ReservationDetailsRightSide">
                <img id="ReservationDetailsImg" src={ReserveTable}/>
            </div>
        </section>
        <section className='SpecialRequests'>
            <div id="SpecialRequestsLeftSide">
                <h1 id="SpecialRequestsTitle">Special Requests</h1>
                <label htmlFor='TablePreference'>Table Preference:</label>
                <select id='TablePreference'>
                    <option>Indoor</option>
                    <option>Outdoor</option>
                </select>
                <label htmlFor='TableLocation'>Table Location:</label>
                <select id='TableLocation'>
                    <option>Near the Window</option>
                    <option>Away from the Window</option>
                    <option>Close to the Entrance</option>
                    <option>Quiet Area</option>
                    <option>Close to Restrooms</option>
                </select>
                <label htmlFor='Occasion'>Occasion:</label>
                <select id='Occasion'>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Graduation</option>
                    <option>Retirement</option>
                </select>
                <label htmlFor='AdditionalRequest'>Additional Requests/Comments:</label>
                <textarea id='AdditionalRequest'></textarea>
            </div>
            <div id="SpecialRequestsRightSide" style={containerStyle}>
                <img src={ReserveTable} style={img1Style}/>
                <img src={ReserveTable} style={img2Style}/>
                <img src={ReserveTable} style={img3Style}/>
            </div>
        </section>
        <section className='ConfirmationDetails'>
            <h1 id="ConfirmationDetailsTitle">Confirmation Details</h1>
            <div style={{display:"flex",gap:"50px"}}>
                <p style={{color:"#495E57",fontWeight:"bold"}}>I Agree to:</p>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div id='Terms'><input id='TermsCheckbox' type='checkbox'/><label htmlFor='TermsCheckbox'><a>Terms and Conditions</a></label></div>
                    <div id='Subscribe'><input id='SubscribeCheckbox'  type='checkbox'/><label htmlFor='SubscribeCheckbox'><a>Subscribe to Updates/Promotions</a></label></div>
                </div>
            </div>
            <div>
                <button id='ConfirmationDetailsBtn' type='submit'>Confirm & Submit</button>
            </div>
        </section>
    </div>
  )
}

export default BookingPage