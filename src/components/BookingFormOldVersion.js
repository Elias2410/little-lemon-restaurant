import React, { useState } from 'react'
import CustomerDetails from './assets/CustomerDetails.jpg'
import ReserveTable from './assets/ReservTable.jpg'
import accessibility from './assets/accessibility.jpg'

const BookingFormOldVersion = () => {

    const [userFullName,setUserFullName]=useState('')
    const [userEmail,setUserEmail]=useState('')
    const [userPhoneNumber,setUserPhoneNumber]=useState('05')
    const [bookingDate,setBookingDate]=useState('')
    const [bookingTime,setBookingTime]=useState('')
    const [numOfGuests,setNumOfGuests]=useState('')
    const [tablePreference,setTablePreference]=useState('')
    const [tableLocation,setTableLocation]=useState('')
    const [tableOccasion,setTableOccasion]=useState('')
    const [additionalRequest,setAdditionalRequest]=useState('')
    const [termsAndCondition,setTermsAndCondition]=useState(false)
    const [subscripeToUpdates,setSubscripeToUpdates]=useState(false)

    const handleNameInputChange = (e)=>{
        setUserFullName(e.target.value)
    }
    const handleEmailInputChange = (e)=>{
        setUserEmail(e.target.value)
    }
    const handleNumberInputChange = (e)=>{
        setUserPhoneNumber(e.target.value)
    }
    const handleBookingDateChange = (e)=>{
        setBookingDate(e.target.value)
    }
    const handleBookingTimeChange = (e)=>{
        setBookingTime(e.target.value)
    }
    const handleNumOfGuestsChange = (e)=>{
        setNumOfGuests(e.target.value)
    }
    const handleTablePreferenceChange = (e)=>{
        setTablePreference(e.target.value)
    }
    const handleTableLocationChange = (e)=>{
        setTableLocation(e.target.value)
    }
    const handleTableOccasionChange = (e)=>{
        setTableOccasion(e.target.value)
    }
    const handleAdditionalRequestChange = (e)=>{
        setAdditionalRequest(e.target.value)
    }
    const handleTermsAndConditionChange = (e)=>{
        setTermsAndCondition(e.target.checked)
    }
    const handleSubscripeToUpdatesChange = (e)=>{
        setSubscripeToUpdates(e.target.checked)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log([{reservation:[
            {Name:{userFullName}},
            {Email:{userEmail}},
            {Phone:{userPhoneNumber}},
            {Date:{bookingDate}},
            {Time:{bookingTime}},
            {Gusts:{numOfGuests}},
            {Preference:{tablePreference}},
            {Location:{tableLocation}},
            {Occasion:{tableOccasion}},
            {Request:{additionalRequest}},
            {"Terms & Condition":{termsAndCondition}},
            {"Subscripe to Updates":{subscripeToUpdates}}
        ]}])
    }

    return (
    <form className='BookingPageContainer' onSubmit={handleSubmit}>
        <fieldset className='CustomerDetails'>
            <div id="CustomerDetailsLeftSide">
                <legend id="CustomerDetailsTitle">Customer Details</legend>
                <label htmlFor='FullName'>Full Name:</label>
                <input value={userFullName} onChange={handleNameInputChange} id='FullName' type='text'/>
                <label htmlFor='EmailAddress'>Email Address:</label>
                <input value={userEmail} onChange={handleEmailInputChange} id='EmailAddress' type='email'/>
                <label htmlFor='PhoneNumbe'>Phone Numbe:</label>
                <input value={userPhoneNumber} onChange={handleNumberInputChange} id='PhoneNumber' type='number'/>
            </div>
            <div id="CustomerDetailsRightSide">
                <img id="CustomerDetailsImg" src={CustomerDetails}/>
            </div>
        </fieldset>
        <fieldset className='ReservationDetails'>
            <div id="ReservationDetailsLeftSide">
                <legend id="ReservationDetailsTitle">Reservation Details</legend>
                <label htmlFor='DateOfReservation'>Date of Reservation:</label>
                <select value={bookingDate} onChange={handleBookingDateChange} id='DateOfReservation'>
                    <option value="13/01/2025">13/01/2025</option>
                    <option value="14/01/2025">14/01/2025</option>
                    <option value="15/01/2025">15/01/2025</option>
                    <option value="16/01/2025">16/01/2025</option>
                    <option value="17/01/2025">17/01/2025</option>
                </select>
                <label htmlFor='TimeOfReservation'>Time of Reservation:</label>
                <select value={bookingTime} onChange={handleBookingTimeChange} id='TimeOfReservation'>
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
                <select value={numOfGuests} onChange={handleNumOfGuestsChange} id='NumberOfGuests'>
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
                <select value={tablePreference} onChange={handleTablePreferenceChange} id='TablePreference'>
                    <option value="Indoor">Indoor</option>
                    <option value="Outdoor">Outdoor</option>
                </select>
                <label htmlFor='TableLocation'>Table Location:</label>
                <select value={tableLocation} onChange={handleTableLocationChange} id='TableLocation'>
                    <option value="Near the Window">Near the Window</option>
                    <option value="Away from the Window">Away from the Window</option>
                    <option value="Close to the Entrance">Close to the Entrance</option>
                    <option value="Quiet Area">Quiet Area</option>
                    <option value="Close to Restrooms">Close to Restrooms</option>
                </select>
                <label htmlFor='Occasion'>Occasion:</label>
                <select value={tableOccasion} onChange={handleTableOccasionChange} id='Occasion'>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Retirement">Retirement</option>
                </select>
                <label htmlFor='AdditionalRequest'>Additional Requests/Comments:</label>
                <textarea value={additionalRequest} onChange={handleAdditionalRequestChange} id='AdditionalRequest'></textarea>
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
                    <div id='Terms'><input checked={termsAndCondition} onChange={handleTermsAndConditionChange} id='TermsCheckbox' type='checkbox'/><label htmlFor='TermsCheckbox'><a>Terms and Conditions</a></label></div>
                    <div id='Subscribe'><input checked={subscripeToUpdates} onChange={handleSubscripeToUpdatesChange} id='SubscribeCheckbox'  type='checkbox'/><label htmlFor='SubscribeCheckbox'><a>Subscribe to Updates/Promotions</a></label></div>
                </div>
            </div>
            <>
                <button id='ConfirmationDetailsBtn' type='submit'>Confirm & Submit</button>
            </>
        </fieldset>
    </form>
  )
}

export default BookingFormOldVersion


// import React, { useEffect, useState } from 'react'
// import CustomerDetails from './assets/CustomerDetails.jpg'
// import ReserveTable from './assets/ReservTable.jpg'
// import accessibility from './assets/accessibility.jpg'
// import { data } from 'react-router-dom'

// const BookingForm = ({state,dispatch}) => {

//     const [data,setData] = useState(null)



//     const seededRandom = function (seed) {
//         var m = 2**35 - 31;
//         var a = 185852;
//         var s = seed % m;
//         return function () {
//             return (s = s * a % m) / m;
//         };
//       }

//     const fetchAPI = function(date) {
//         let result = [];
//         let random = seededRandom(date.getDate());

//         for(let i = 17; i <= 23; i++) {
//             if(random() < 0.5) {
//                 result.push(i + ':00');
//             }
//             if(random() < 0.5) {
//                 result.push(i + ':30');
//             }
//         }
//         return result;
//     };

//     // const submitAPI = function(formData) {
//     //     return true;
//     // };

//     // useEffect(()=>{
//     //     const result = fetchAPI(date)
//     //     setDate(result)
//     // },[])

//     const handleUserInputstChange = (e) => {
//         const {name, type, value, checked} = e.target
//         dispatch({type:`SET_${name.toUpperCase()}`, payload:type === 'checkbox' ? checked : value})
//         if (name === "DATE"){
//             setData(value)
//             const result = fetchAPI(data)
//         }
//     }

//     const timings = ["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00",]
//     const availableTimeList = () => {
//         return (
//             timings.map((availableTime,index) => (<option value={availableTime} key={index}>{availableTime}</option>))
//         )
//     }

//     const dates = ["13/01/2025","14/01/2025","15/01/2025","16/01/2025","17/01/2025"]
//     const isoDates = ()=>{
//         return (dates.map(date=>{
//             const [day, month, year] = date.split('/')
//             return new Date(`${year}-${month}-${day}`)
//         }))
//     }

//     const availableDateList = () => {
//         const isoDatesList = isoDates()
//         return (
//             isoDatesList.map((availableDate,index) => (
//             <option value={availableDate.toISOString().split('T')[0]} key={index}>
//                 {availableDate.toISOString().split('T')[0]}
//             </option>))
//         )
//     }

//     const gusts = [1,2,3,4,5,6,7,8,9,10]
//     const availableGustsSlots = () => {
//         return (
//             gusts.map((availableGusts,index) => (<option value={availableGusts} key={index}>{availableGusts}</option>))
//         )
//     }

//     const LocationSlots = ["Near the Window","Away from the Window","Close to the Entrance","Quiet Area","Close to Restrooms"]
//     const availableLocationSlots = () => {
//         return (
//             LocationSlots.map((availableLocation,index) => (<option value={availableLocation} key={index}>{availableLocation}</option>))
//         )
//     }

//     const OccasionList = ["Birthday","Anniversary","Engagement","Graduation","Retirement"]
//     const availableOccaionList = () => {
//         return (
//             OccasionList.map((availableOccaion,index) => (<option value={availableOccaion} key={index}>{availableOccaion}</option>))
//         )
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(state)
//     }

//     return (
//         <form className='BookingPageContainer' onSubmit={handleSubmit} role="form">
//             <fieldset className='ReservationDetails' aria-labelledby="ReservationDetailsTitle">
//                 <div id="ReservationDetailsLeftSide">
//                     <legend id="ReservationDetailsTitle">Reservation Details</legend>
//                     <label htmlFor='DateOfReservation'>Date of Reservation:</label>
//                     <select name="DATE" value={state.bookingDate} onChange={handleUserInputstChange} id='DateOfReservation' aria-required="true">
//                         {availableDateList()}
//                     </select>
//                     <label htmlFor='TimeOfReservation'>Time of Reservation:</label>
//                     <select name="TIME" value={state.bookingTime} onChange={handleUserInputstChange} id='TimeOfReservation' aria-required="true">
//                         {availableTimeList()}
//                     </select>
//                     <label htmlFor='NumberOfGuests'>Number of Guests:</label>
//                     <select name="GUESTS" value={state.numOfGuests} onChange={handleUserInputstChange} id='NumberOfGuests' aria-required="true">
//                         {availableGustsSlots()}
//                     </select>
//                 </div>
//                 <div id="ReservationDetailsRightSide">
//                     <img id="ReservationDetailsImg" src={ReserveTable} alt="Reserve Table"/>
//                 </div>
//             </fieldset>
//             <fieldset className='SpecialRequests' aria-labelledby="SpecialRequestsTitle">
//                 <div id="SpecialRequestsLeftSide">
//                     <legend id="SpecialRequestsTitle">Special Requests</legend>
//                     <label htmlFor='TablePreference'>Table Preference:</label>
//                     <select name="PREFERENCE" value={state.tablePreference} onChange={handleUserInputstChange} id='TablePreference' aria-required="true">
//                         <option value="Indoor">Indoor</option>
//                         <option value="Outdoor">Outdoor</option>
//                     </select>
//                     <label htmlFor='TableLocation'>Table Location:</label>
//                     <select name="LOCATION" value={state.tableLocation} onChange={handleUserInputstChange} id='TableLocation' aria-required="true">
//                         {availableLocationSlots()}
//                     </select>
//                     <label htmlFor='Occasion'>Occasion:</label>
//                     <select name="OCCASION" value={state.tableOccasion} onChange={handleUserInputstChange} id='Occasion' aria-required="true">
//                         {availableOccaionList()}
//                     </select>
//                     <label htmlFor='AdditionalRequest'>Additional Requests/Comments:</label>
//                     <textarea name="REQUEST" value={state.additionalRequest} onChange={handleUserInputstChange} id='AdditionalRequest' aria-required="true"></textarea>
//                 </div>
//                 <div id="SpecialRequestsRightSide">
//                     <img src={accessibility} alt="Accessibility Icon" style={{width:"50%",height:"50%",minHeight:"184px"}}/>
//                 </div>
//             </fieldset>
//             <fieldset className='CustomerDetails' aria-labelledby="CustomerDetailsTitle">
//                 <div id="CustomerDetailsLeftSide">
//                     <legend id="CustomerDetailsTitle">Customer Details</legend>
//                     <label htmlFor='FullName'>Full Name:</label>
//                     <input name="NAME" value={state.userFullName} onChange={handleUserInputstChange} id='FullName' type='text' aria-required="true"/>
//                     <label htmlFor='EmailAddress'>Email Address:</label>
//                     <input name="EMAIL" value={state.userEmail} onChange={handleUserInputstChange} id='EmailAddress' type='email' aria-required="true"/>
//                     <label htmlFor='PhoneNumber'>Phone Number:</label>
//                     <input name="PHONE" value={state.userPhoneNumber} onChange={handleUserInputstChange} id='PhoneNumber' type='number' aria-required="true"/>
//                 </div>
//                 <div id="CustomerDetailsRightSide">
//                     <img id="CustomerDetailsImg" src={CustomerDetails} alt="Customer Details"/>
//                 </div>
//             </fieldset>
//             <fieldset className='ConfirmationDetails' aria-labelledby="ConfirmationDetailsTitle">
//                 <legend id="ConfirmationDetailsTitle">Confirmation Details</legend>
//                 <div style={{display:"flex",gap:"50px"}}>
//                     <p style={{color:"#495E57",fontWeight:"bold"}}>I Agree to:</p>
//                     <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
//                         <div id='Terms'><input name="TERMS" checked={state.termsAndCondition} onChange={handleUserInputstChange} id='TermsCheckbox' type='checkbox' aria-required="true"/><label htmlFor='TermsCheckbox'><a href="#terms">Terms and Conditions</a></label></div>
//                         <div id='Subscribe'><input name="UPDATES" checked={state.subscripeToUpdates} onChange={handleUserInputstChange} id='SubscribeCheckbox' type='checkbox'/><label htmlFor='SubscribeCheckbox'><a href="#subscribe">Subscribe to Updates/Promotions</a></label></div>
//                     </div>
//                 </div>
//                 <button id='ConfirmationDetailsBtn' type='submit'>Confirm & Submit</button>
//             </fieldset>
//         </form>
//     )
// }

// export default BookingForm
