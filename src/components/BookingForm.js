import React, { useEffect, useState } from "react";
import CustomerDetails from "./assets/CustomerDetails.jpg";
import ReserveTable from "./assets/ReservTable.jpg";
import accessibility from "./assets/accessibility.jpg";

const BookingForm = ({ state, dispatch }) => {
  const [availableTimings, setAvailableTimings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(state.bookingDate || "");

  const seededRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = (s * a) % m) / m;
  };

  const fetchAPI = (date) => {
    const result = [];
    const random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(`${i}:00`);
      }
      if (random() < 0.5) {
        result.push(`${i}:30`);
      }
    }
    return result;
  };

  useEffect(() => {
    if (selectedDate) {
      const isoDate = new Date(selectedDate);
      const result = fetchAPI(isoDate);
      setAvailableTimings(result);
    }
  }, [selectedDate]);

  const handleUserInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch({
      type: `SET_${name.toUpperCase()}`,
      payload: type === "checkbox" ? checked : value,
    });

    if (name === "DATE") {
      setSelectedDate(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with state:", state);
  };

  const availableTimeList = () => {
    return availableTimings.map((time, index) => (
      <option value={time} key={index}>
        {time}
      </option>
    ));
  };

  const dates = ["2025-01-13", "2025-01-14", "2025-01-15", "2025-01-16", "2025-01-17"];
  const availableDateList = () => {
    return dates.map((date, index) => (
      <option value={date} key={index}>
        {date}
      </option>
    ));
  };

  const gusts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const availableGuestSlots = () => {
    return gusts.map((guest, index) => (
      <option value={guest} key={index}>
        {guest}
      </option>
    ));
  };

  const LocationSlots = [
    "Near the Window",
    "Away from the Window",
    "Close to the Entrance",
    "Quiet Area",
    "Close to Restrooms",
  ];
  const availableLocationSlots = () => {
    return LocationSlots.map((location, index) => (
      <option value={location} key={index}>
        {location}
      </option>
    ));
  };

  const OccasionList = ["Birthday", "Anniversary", "Engagement", "Graduation", "Retirement"];
  const availableOccasionList = () => {
    return OccasionList.map((occasion, index) => (
      <option value={occasion} key={index}>
        {occasion}
      </option>
    ));
  };

  return (
    <form className="BookingPageContainer" onSubmit={handleSubmit} role="form">
      <fieldset className="ReservationDetails" aria-labelledby="ReservationDetailsTitle">
        <legend id="ReservationDetailsTitle">Reservation Details</legend>
        <label htmlFor="DateOfReservation">Date of Reservation:</label>
        <select
          name="DATE"
          value={selectedDate}
          onChange={handleUserInputChange}
          id="DateOfReservation"
          aria-required="true"
        >
          {availableDateList()}
        </select>
        <label htmlFor="TimeOfReservation">Time of Reservation:</label>
        <select
          name="TIME"
          value={state.bookingTime}
          onChange={handleUserInputChange}
          id="TimeOfReservation"
          aria-required="true"
        >
          {availableTimeList()}
        </select>
        <label htmlFor="NumberOfGuests">Number of Guests:</label>
        <select
          name="GUESTS"
          value={state.numOfGuests}
          onChange={handleUserInputChange}
          id="NumberOfGuests"
          aria-required="true"
        >
          {availableGuestSlots()}
        </select>
      </fieldset>
      <fieldset className="SpecialRequests" aria-labelledby="SpecialRequestsTitle">
        <legend id="SpecialRequestsTitle">Special Requests</legend>
        <label htmlFor="TablePreference">Table Preference:</label>
        <select
          name="PREFERENCE"
          value={state.tablePreference}
          onChange={handleUserInputChange}
          id="TablePreference"
          aria-required="true"
        >
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
        </select>
        <label htmlFor="TableLocation">Table Location:</label>
        <select
          name="LOCATION"
          value={state.tableLocation}
          onChange={handleUserInputChange}
          id="TableLocation"
          aria-required="true"
        >
          {availableLocationSlots()}
        </select>
        <label htmlFor="Occasion">Occasion:</label>
        <select
          name="OCCASION"
          value={state.tableOccasion}
          onChange={handleUserInputChange}
          id="Occasion"
          aria-required="true"
        >
          {availableOccasionList()}
        </select>
      </fieldset>
      <fieldset className="CustomerDetails" aria-labelledby="CustomerDetailsTitle">
        <legend id="CustomerDetailsTitle">Customer Details</legend>
        <label htmlFor="FullName">Full Name:</label>
        <input
          name="NAME"
          value={state.userFullName}
          onChange={handleUserInputChange}
          id="FullName"
          type="text"
          aria-required="true"
        />
        <label htmlFor="EmailAddress">Email Address:</label>
        <input
          name="EMAIL"
          value={state.userEmail}
          onChange={handleUserInputChange}
          id="EmailAddress"
          type="email"
          aria-required="true"
        />
      </fieldset>
      <button type="submit">Confirm & Submit</button>
    </form>
  );
};

export default BookingForm;
