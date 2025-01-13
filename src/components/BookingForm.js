import React from 'react'
import CustomerDetails from './assets/CustomerDetails.jpg'
import ReserveTable from './assets/ReservTable.jpg'
import accessibility from './assets/accessibility.jpg'

const BookingForm = ({state,dispatch}) => {

    const handleUserInputstChange = (e) => {
        const {name, type, value, checked} = e.target
        dispatch({type:`SET_${name.toUpperCase()}`, payload:type === 'checkbox' ? checked : value})
    }

    const Timings = ["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00",]
    const availableTimeList = () => {
        return (
            Timings.map((availableTime,index) => (<option value={availableTime} key={index}>{availableTime}</option>))
        )
    }

    const Dates = ["13/01/2025","14/01/2025","15/01/2025","16/01/2025","17/01/2025",]
    const availableDateList = () => {
        return (
            Dates.map((availableDate,index) => (<option value={availableDate} key={index}>{availableDate}</option>))
        )
    }

    const Gusts = [1,2,3,4,5,6,7,8,9,10]
    const availableGustsSlots = () => {
        return (
            Gusts.map((availableGusts,index) => (<option value={availableGusts} key={index}>{availableGusts}</option>))
        )
    }

    const LocationSlots = ["Near the Window","Away from the Window","Close to the Entrance","Quiet Area","Close to Restrooms"]
    const availableLocationSlots = () => {
        return (
            LocationSlots.map((availableLocation,index) => (<option value={availableLocation} key={index}>{availableLocation}</option>))
        )
    }

    const OccasionList = ["Birthday","Anniversary","Engagement","Graduation","Retirement"]
    const availableOccaionList = () => {
        return (
            OccasionList.map((availableOccaion,index) => (<option value={availableOccaion} key={index}>{availableOccaion}</option>))
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
    }

    return (
        <form className='BookingPageContainer' onSubmit={handleSubmit} role="form">
            <fieldset className='ReservationDetails' aria-labelledby="ReservationDetailsTitle">
                <div id="ReservationDetailsLeftSide">
                    <legend id="ReservationDetailsTitle">Reservation Details</legend>
                    <label htmlFor='DateOfReservation'>Date of Reservation:</label>
                    <select name="DATE" value={state.bookingDate} onChange={handleUserInputstChange} id='DateOfReservation' aria-required="true">
                        {availableDateList()}
                    </select>
                    <label htmlFor='TimeOfReservation'>Time of Reservation:</label>
                    <select name="TIME" value={state.bookingTime} onChange={handleUserInputstChange} id='TimeOfReservation' aria-required="true">
                        {availableTimeList()}
                    </select>
                    <label htmlFor='NumberOfGuests'>Number of Guests:</label>
                    <select name="GUESTS" value={state.numOfGuests} onChange={handleUserInputstChange} id='NumberOfGuests' aria-required="true">
                        {availableGustsSlots()}
                    </select>
                </div>
                <div id="ReservationDetailsRightSide">
                    <img id="ReservationDetailsImg" src={ReserveTable} alt="Reserve Table"/>
                </div>
            </fieldset>
            <fieldset className='SpecialRequests' aria-labelledby="SpecialRequestsTitle">
                <div id="SpecialRequestsLeftSide">
                    <legend id="SpecialRequestsTitle">Special Requests</legend>
                    <label htmlFor='TablePreference'>Table Preference:</label>
                    <select name="PREFERENCE" value={state.tablePreference} onChange={handleUserInputstChange} id='TablePreference' aria-required="true">
                        <option value="Indoor">Indoor</option>
                        <option value="Outdoor">Outdoor</option>
                    </select>
                    <label htmlFor='TableLocation'>Table Location:</label>
                    <select name="LOCATION" value={state.tableLocation} onChange={handleUserInputstChange} id='TableLocation' aria-required="true">
                        {availableLocationSlots()}
                    </select>
                    <label htmlFor='Occasion'>Occasion:</label>
                    <select name="OCCASION" value={state.tableOccasion} onChange={handleUserInputstChange} id='Occasion' aria-required="true">
                        {availableOccaionList()}
                    </select>
                    <label htmlFor='AdditionalRequest'>Additional Requests/Comments:</label>
                    <textarea name="REQUEST" value={state.additionalRequest} onChange={handleUserInputstChange} id='AdditionalRequest' aria-required="true"></textarea>
                </div>
                <div id="SpecialRequestsRightSide">
                    <img src={accessibility} alt="Accessibility Icon" style={{width:"50%",height:"50%",minHeight:"184px"}}/>
                </div>
            </fieldset>
            <fieldset className='CustomerDetails' aria-labelledby="CustomerDetailsTitle">
                <div id="CustomerDetailsLeftSide">
                    <legend id="CustomerDetailsTitle">Customer Details</legend>
                    <label htmlFor='FullName'>Full Name:</label>
                    <input name="NAME" value={state.userFullName} onChange={handleUserInputstChange} id='FullName' type='text' aria-required="true"/>
                    <label htmlFor='EmailAddress'>Email Address:</label>
                    <input name="EMAIL" value={state.userEmail} onChange={handleUserInputstChange} id='EmailAddress' type='email' aria-required="true"/>
                    <label htmlFor='PhoneNumber'>Phone Number:</label>
                    <input name="PHONE" value={state.userPhoneNumber} onChange={handleUserInputstChange} id='PhoneNumber' type='number' aria-required="true"/>
                </div>
                <div id="CustomerDetailsRightSide">
                    <img id="CustomerDetailsImg" src={CustomerDetails} alt="Customer Details"/>
                </div>
            </fieldset>
            <fieldset className='ConfirmationDetails' aria-labelledby="ConfirmationDetailsTitle">
                <legend id="ConfirmationDetailsTitle">Confirmation Details</legend>
                <div style={{display:"flex",gap:"50px"}}>
                    <p style={{color:"#495E57",fontWeight:"bold"}}>I Agree to:</p>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <div id='Terms'><input name="TERMS" checked={state.termsAndCondition} onChange={handleUserInputstChange} id='TermsCheckbox' type='checkbox' aria-required="true"/><label htmlFor='TermsCheckbox'><a href="#terms">Terms and Conditions</a></label></div>
                        <div id='Subscribe'><input name="UPDATES" checked={state.subscripeToUpdates} onChange={handleUserInputstChange} id='SubscribeCheckbox' type='checkbox'/><label htmlFor='SubscribeCheckbox'><a href="#subscribe">Subscribe to Updates/Promotions</a></label></div>
                    </div>
                </div>
                <button id='ConfirmationDetailsBtn' type='submit'>Confirm & Submit</button>
            </fieldset>
        </form>
    )
}

export default BookingForm
