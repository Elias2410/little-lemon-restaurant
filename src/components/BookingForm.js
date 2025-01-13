import React, { useState } from 'react'
import CustomerDetails from './assets/CustomerDetails.jpg'
import ReserveTable from './assets/ReservTable.jpg'
import accessibility from './assets/accessibility.jpg'

const BookingForm = ({userInputs, setUserInputs}) => {

    const handleUserInputstChange = (e)=>{
        const {name, type, value, checked,} = e.target;
        setUserInputs(
            (prev)=>(
                {...prev,[name]:type==='checkbox'?checked:value}
            )
        );
    }

    const Timings = ["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00",]
    const availableTimeList = ()=>{
        return(
        Timings.map((availableTime,index)=>(<option value={availableTime} key={index}>{availableTime}</option>))
        )
    }

    const Dates = ["13/01/2025","14/01/2025","15/01/2025","16/01/2025","17/01/2025",]
    const availableDateList = ()=>{
        return(
        Dates.map(
            (availableDate,index)=>(<option value={availableDate} key={index}>{availableDate}</option>)
        )
        )
    }

    const Gusts = [1,2,3,4,5,6,7,8,9,10]
    const availableGustsSlots = ()=>{
        return(
        Gusts.map(
            (availableGusts,index)=>(<option value={availableGusts} key={index}>{availableGusts}</option>)
        )
        )
    }

    const LocationSlots = ["Near the Window","Away from the Window","Close to the Entrance","Quiet Area","Close to Restrooms"]
    const availableLocationSlots = ()=>{
        return(
        LocationSlots.map(
            (availableLocation,index)=>(<option value={availableLocation} key={index}>{availableLocation}</option>)
        )
        )
    }

    const OccasionList = ["Birthday","Anniversary","Engagement","Graduation","Retirement"]
    const availableOccaionList = ()=>{
        return(
        OccasionList.map(
            (availableOccaion,index)=>(<option value={availableOccaion} key={index}>{availableOccaion}</option>)
        )
        )
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(userInputs)
    }

    return (
    <form className='BookingPageContainer' onSubmit={handleSubmit}>
        <fieldset className='ReservationDetails'>
            <div id="ReservationDetailsLeftSide">
                <legend id="ReservationDetailsTitle">Reservation Details</legend>
                <label htmlFor='DateOfReservation'>Date of Reservation:</label>
                <select name="bookingDate" value={userInputs.bookingDate} onChange={handleUserInputstChange} id='DateOfReservation'>
                    {availableDateList()}
                </select>
                <label htmlFor='TimeOfReservation'>Time of Reservation:</label>
                <select name="bookingTime" value={userInputs.bookingTime} onChange={handleUserInputstChange} id='TimeOfReservation'>
                    {availableTimeList()}
                </select>
                <label htmlFor='NumberOfGuests'>Number of Guests:</label>
                <select name="numOfGuests" value={userInputs.numOfGuests} onChange={handleUserInputstChange} id='NumberOfGuests'>
                    {availableGustsSlots()}
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
                    {availableLocationSlots()}
                </select>
                <label htmlFor='Occasion'>Occasion:</label>
                <select name="tableOccasion" value={userInputs.tableOccasion} onChange={handleUserInputstChange} id='Occasion'>
                    {availableOccaionList()}
                </select>
                <label htmlFor='AdditionalRequest'>Additional Requests/Comments:</label>
                <textarea name="additionalRequest" value={userInputs.additionalRequest} onChange={handleUserInputstChange} id='AdditionalRequest'></textarea>
            </div>
            <div id="SpecialRequestsRightSide">
                <img src={accessibility} style={{width:"50%",height:"50%",minHeight:"184px"}}/>
            </div>
        </fieldset>
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