import React, { useState } from 'react'
import CustomerDetails from './assets/CustomerDetails.jpg'
import ReserveTable from './assets/ReservTable.jpg'
import accessibility from './assets/accessibility.jpg'

const BookingForm = () => {

    const [userInputs,setUserInputs]=useState({
        userFullName:'',
        userEmail:'',
        userPhoneNumber:'05',
        bookingDate:'',
        bookingTime:'',
        numOfGuests:'',
        tablePreference:'',
        tableLocation:'',
        tableOccasion:'',
        additionalRequest:'',
        termsAndCondition:false,
        subscripeToUpdates:false,
    })

    const Timings = ["11:00","12:00"]
    const bookingTimeList = (time)=>{
        Timings.map(<option value={time}>13/01/2025</option>)
    }

    const handleUserInputstChange = (e)=>{
        const {name, type, value, checked,} = e.target;
        setUserInputs(
            (prev)=>(
                {...prev,[name]:type==='checkbox'?checked:value}
            )
        );
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(userInputs)
    }

    return (
    <form className='BookingPageContainer' onSubmit={handleSubmit}>
        <fieldset className='CustomerDetails'>
            <div id="CustomerDetailsLeftSide">
                <legend id="CustomerDetailsTitle">Customer Details</legend>
                <label htmlFor='FullName'>Full Name:</label>
                <input name="userFullName" value={userInputs.userFullName} onChange={handleUserInputstChange} id='FullName' type='text'/>
                <label htmlFor='EmailAddress'>Email Address:</label>
                <input name="userEmail" value={userInputs.userEmail} onChange={handleUserInputstChange} id='EmailAddress' type='email'/>
                <label htmlFor='PhoneNumbe'>Phone Numbe:</label>
                <input name="userPhoneNumber" value={userInputs.userPhoneNumber} onChange={handleUserInputstChange} id='PhoneNumber' type='number'/>
            </div>
            <div id="CustomerDetailsRightSide">
                <img id="CustomerDetailsImg" src={CustomerDetails}/>
            </div>
        </fieldset>
        <fieldset className='ReservationDetails'>
            <div id="ReservationDetailsLeftSide">
                <legend id="ReservationDetailsTitle">Reservation Details</legend>
                <label htmlFor='DateOfReservation'>Date of Reservation:</label>
                <select name="bookingDate" value={userInputs.bookingDate} onChange={handleUserInputstChange} id='DateOfReservation'>
                    <option value="13/01/2025">13/01/2025</option>
                    <option value="14/01/2025">14/01/2025</option>
                    <option value="15/01/2025">15/01/2025</option>
                    <option value="16/01/2025">16/01/2025</option>
                    <option value="17/01/2025">17/01/2025</option>
                </select>
                <label htmlFor='TimeOfReservation'>Time of Reservation:</label>
                <select name="bookingTime" value={userInputs.bookingTime} onChange={handleUserInputstChange} id='TimeOfReservation'>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="13:00 PM">13:00 PM</option>
                    <option value="14:00 PM">14:00 PM</option>
                    <option value="15:00 PM">15:00 PM</option>
                    <option value="16:00 PM">16:00 PM</option>
                    <option value="17:00 PM">17:00 PM</option>
                    <option value="18:00 PM">18:00 PM</option>
                    <option value="19:00 PM">19:00 PM</option>
                    <option value="20:00 PM">20:00 PM</option>
                    <option value="21:00 PM">21:00 PM</option>
                    <option value="22:00 PM">22:00 PM</option>
                </select>
                <label htmlFor='NumberOfGuests'>Number of Guests:</label>
                <select name="numOfGuests" value={userInputs.numOfGuests} onChange={handleUserInputstChange} id='NumberOfGuests'>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="1">10</option>
                </select>
            </div>
            <div id="ReservationDetailsRightSide">
                <img id="ReservationDetailsImg" src={ReserveTable}/>
            </div>
        </fieldset>
        <fieldset className='SpecialRequests'>
            <div id="SpecialRequestsLeftSide">
                <legend id="SpecialRequestsTitle">Special Requests</legend>
                <label htmlFor='TablePreference'>Table Preference:</label>
                <select name="tablePreference" value={userInputs.tablePreference} onChange={handleUserInputstChange} id='TablePreference'>
                    <option value="Indoor">Indoor</option>
                    <option value="Outdoor">Outdoor</option>
                </select>
                <label htmlFor='TableLocation'>Table Location:</label>
                <select name="tableLocation" value={userInputs.tableLocation} onChange={handleUserInputstChange} id='TableLocation'>
                    <option value="Near the Window">Near the Window</option>
                    <option value="Away from the Window">Away from the Window</option>
                    <option value="Close to the Entrance">Close to the Entrance</option>
                    <option value="Quiet Area">Quiet Area</option>
                    <option value="Close to Restrooms">Close to Restrooms</option>
                </select>
                <label htmlFor='Occasion'>Occasion:</label>
                <select name="tableOccasion" value={userInputs.tableOccasion} onChange={handleUserInputstChange} id='Occasion'>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Retirement">Retirement</option>
                </select>
                <label htmlFor='AdditionalRequest'>Additional Requests/Comments:</label>
                <textarea name="additionalRequest" value={userInputs.additionalRequest} onChange={handleUserInputstChange} id='AdditionalRequest'></textarea>
            </div>
            <div id="SpecialRequestsRightSide">
                <img src={accessibility} style={{width:"50%",height:"50%",minHeight:"184px"}}/>
            </div>
        </fieldset>
        <fieldset className='ConfirmationDetails'>
            <legend id="ConfirmationDetailsTitle">Confirmation Details</legend>
            <div style={{display:"flex",gap:"50px"}}>
                <p style={{color:"#495E57",fontWeight:"bold"}}>I Agree to:</p>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div id='Terms'><input name="termsAndCondition" checked={userInputs.termsAndCondition} onChange={handleUserInputstChange} id='TermsCheckbox' type='checkbox'/><label htmlFor='TermsCheckbox'><a>Terms and Conditions</a></label></div>
                    <div id='Subscribe'><input name="subscripeToUpdates" checked={userInputs.subscripeToUpdates} onChange={handleUserInputstChange} id='SubscribeCheckbox'  type='checkbox'/><label htmlFor='SubscribeCheckbox'><a>Subscribe to Updates/Promotions</a></label></div>
                </div>
            </div>
            <>
                <button id='ConfirmationDetailsBtn' type='submit'>Confirm & Submit</button>
            </>
        </fieldset>
    </form>
  )
}

export default BookingForm