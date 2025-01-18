import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ state, dispatch }) => {
  const [availableTimings, setAvailableTimings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(state.bookingDate || "");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!state.bookingDate) {
      newErrors.DATE = "Please select a reservation date.";
    }
    if (!state.bookingTime) {
      newErrors.TIME = "Please select a reservation time.";
    }
    if (!state.numOfGuests) {
      newErrors.GUESTS = "Please select the number of guests.";
    }
    if (!state.userFullName.trim()) {
      newErrors.NAME = "Full name is required.";
    }
    if (!state.userEmail.trim() || !/\S+@\S+\.\S+/.test(state.userEmail)) {
      newErrors.EMAIL = "A valid email address is required.";
    }
    if (!state.userPhoneNumber || !/^\d{10}$/.test(state.userPhoneNumber)) {
      newErrors.PHONE = "A valid 10-digit phone number is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted with state:", state);
      const formSubmitted = true; // Simulated API call
      if (formSubmitted) {
        navigate("/BookingConfirmation");
      }
    }
  };

  const availableTimeList = () =>
    availableTimings.map((time, index) => (
      <option value={time} key={index}>
        {time}
      </option>
    ));

  const dates = ["2025-01-13", "2025-01-14", "2025-01-15", "2025-01-16", "2025-01-17"];
    const availableDateList = () =>
      dates.map((date, index) => (
        <option value={date} key={index}>
          {date}
        </option>
      ));

  const gusts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const availableGuestSlots = () =>
    gusts.map((guest, index) => (
      <option value={guest} key={index}>
        {guest}
      </option>
    ));
    const LocationSlots = [
    "Near the Window",
    "Away from the Window",
    "Close to the Entrance",
    "Quiet Area",
    "Close to Restrooms",
  ];
  const availableLocationSlots = () =>
    LocationSlots.map((location, index) => (
      <option value={location} key={index}>
        {location}
      </option>
    ));
  const OccasionList = ["Birthday", "Anniversary", "Engagement", "Graduation", "Retirement"];
  const availableOccasionList = () =>
    OccasionList.map((occasion, index) => (
      <option value={occasion} key={index}>
        {occasion}
      </option>
    ));

  return (
    <form
      className="BookingFormContainer"
      onSubmit={handleSubmit}
      role="form"
      aria-labelledby="bookingFormTitle"
    >
      <h1 id="bookingFormTitle">Table Booking Form</h1>
      <fieldset>
        <legend>Reservation Details</legend>
        {errors.DATE && (
          <p id="dateError" className="error">
            {errors.DATE}
          </p>
        )}
        <div className="LabelAndInput">
          <label htmlFor="DateOfReservation">Date of Reservation:</label>
          <select
              name="DATE"
              value={selectedDate}
              onChange={handleUserInputChange}
              id="DateOfReservation"
              aria-describedby="dateError"
              aria-invalid={!!errors.DATE}
              className={errors.DATE ? "input-error" : ""}
            >
              {availableDateList()}
          </select>
        </div>
        {errors.TIME && (
          <p id="timeError" className="error">
            {errors.TIME}
          </p>
        )}
        <div className="LabelAndInput">
          <label htmlFor="TimeOfReservation">Time of Reservation:</label>
          <select
            name="TIME"
            value={state.bookingTime}
            onChange={handleUserInputChange}
            id="TimeOfReservation"
            aria-describedby="timeError"
            aria-invalid={!!errors.TIME}
            className={errors.TIME ? "input-error" : ""}
          >
            {availableTimeList()}
          </select>
        </div>
        {errors.GUESTS && (
          <p id="guestsError" className="error">
            {errors.GUESTS}
          </p>
        )}
        <div className="LabelAndInput">
          <label htmlFor="NumberOfGuests">Number of Guests:</label>
           <select
            name="GUESTS"
            value={state.numOfGuests}
            onChange={handleUserInputChange}
            id="NumberOfGuests"
            aria-describedby="guestsError"
            aria-invalid={!!errors.GUESTS}
            className={errors.GUESTS ? "input-error" : ""}
          >
            {availableGuestSlots()}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <legend>Special Requests</legend>
        <div className="LabelAndInput">
          <label htmlFor="TablePreference">Table Preference:</label>
          <select
            name="PREFERENCE"
            value={state.tablePreference}
            onChange={handleUserInputChange}
            id="TablePreference"
          >
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </div>
        <div className="LabelAndInput">
          <label htmlFor="TableLocation">Table Location:</label>
          <select
            name="LOCATION"
            value={state.tableLocation}
            onChange={handleUserInputChange}
            id="TableLocation"
          >
             {availableLocationSlots()}
          </select>
        </div>
        <div className="LabelAndInput">
          <label htmlFor="Occasion">Occasion:</label>
          <select
            name="OCCASION"
            value={state.tableOccasion}
            onChange={handleUserInputChange}
            id="Occasion"
          >
           {availableOccasionList()}
          </select>
        </div>
        <div className="LabelAndInput">
          <label htmlFor="AdditionalRequest">Additional Request:</label>
          <textarea
            name="REQUEST"
            value={state.additionalRequest}
            onChange={handleUserInputChange}
            id="AdditionalRequest"
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Customer Details</legend>
        {errors.NAME && (
          <p id="nameError" className="error">
            {errors.NAME}
          </p>
        )}
        <div className="LabelAndInput">
          <label htmlFor="FullName">Full Name:</label>
          <input
            name="NAME"
            value={state.userFullName}
            onChange={handleUserInputChange}
            id="FullName"
            type="text"
            className={errors.NAME ? "input-error" : ""}
             aria-invalid={!!errors.NAME}
          />
        </div>
        {errors.EMAIL && <p className="error">{errors.EMAIL}</p>}
        <div className="LabelAndInput">
          <label htmlFor="EmailAddress">Email Address:</label>
          <input
            name="EMAIL"
            value={state.userEmail}
            onChange={handleUserInputChange}
            id="EmailAddress"
            type="email"
            className={errors.EMAIL ? "input-error" : ""}
            aria-invalid={!!errors.EMAIL}
          />
        </div>
          {errors.PHONE && <p className="error">{errors.PHONE}</p>}
          <div className="LabelAndInput">
          <label htmlFor="PhoneNumber">Phone Number:</label>
          <input
            name="PHONE"
            value={state.userPhoneNumber}
            onChange={handleUserInputChange}
            id="PhoneNumber"
            type="number"
            className={` ${errors.PHONE ? "input-error" : ""} input-number-no-spinners`}
            aria-invalid={!!errors.PHONE}
          />
        </div>
      </fieldset>
      <button id="BookingFormSubmitBtn" type="submit">
        Confirm & Submit
      </button>
    </form>
  );
};

export default BookingForm;