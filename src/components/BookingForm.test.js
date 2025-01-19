import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';
import { BrowserRouter } from 'react-router-dom';

const mockDispatch = jest.fn();
const mockState = {
  userFullName: '',
  userEmail: '',
  userPhoneNumber: '05',
  bookingDate: '',
  bookingTime: '',
  numOfGuests: '',
  tablePreference: '',
  tableLocation: '',
  tableOccasion: '',
  additionalRequest: '',
  termsAndCondition: false,
  subscripeToUpdates: false,
};


describe('BookingForm Component', () => {
    beforeEach(() => {
      render(
      <BrowserRouter>
          <BookingForm state={mockState} dispatch={mockDispatch} />
       </BrowserRouter>
      );
    });
  it('renders all the form elements', () => {
      const form = screen.getByRole("form");
      expect(form).toBeInTheDocument();
    expect(screen.getByLabelText('Date of Reservation:')).toBeInTheDocument();
      expect(screen.getByLabelText('Time of Reservation:')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of Guests:')).toBeInTheDocument();
      expect(screen.getByLabelText('Table Preference:')).toBeInTheDocument();
      expect(screen.getByLabelText('Table Location:')).toBeInTheDocument();
      expect(screen.getByLabelText('Occasion:')).toBeInTheDocument();
      expect(screen.getByLabelText('Additional Request:')).toBeInTheDocument();
    expect(screen.getByLabelText('Full Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address:')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number:')).toBeInTheDocument();
   });

  it('updates input values on change', () => {
      const dateInput = screen.getByLabelText('Date of Reservation:');
    fireEvent.change(dateInput, { target: { value: '2025-01-13' } });
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
            type: 'SET_DATE',
            payload: "2025-01-13",
          });

    const timeInput = screen.getByLabelText('Time of Reservation:');
    fireEvent.change(timeInput, { target: { value: '17:00' } });
    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenCalledWith({
            type: 'SET_TIME',
            payload: "17:00",
          });

     const guestInput = screen.getByLabelText('Number of Guests:');
     fireEvent.change(guestInput, { target: { value: 5 } });
    expect(mockDispatch).toHaveBeenCalledTimes(3);
    expect(mockDispatch).toHaveBeenCalledWith({
            type: 'SET_GUESTS',
            payload: 5,
          });

      const fullNameInput = screen.getByLabelText('Full Name:');
      fireEvent.change(fullNameInput, { target: { value: 'Test User' } });
       expect(mockDispatch).toHaveBeenCalledTimes(4);
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'SET_NAME',
        payload: 'Test User',
      });


    const emailInput = screen.getByLabelText('Email Address:');
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        expect(mockDispatch).toHaveBeenCalledTimes(5);
        expect(mockDispatch).toHaveBeenCalledWith({
        type: 'SET_EMAIL',
        payload: 'test@example.com',
      });

     const phoneInput = screen.getByLabelText('Phone Number:');
      fireEvent.change(phoneInput, { target: { value: '1234567890' } });
       expect(mockDispatch).toHaveBeenCalledTimes(6);
       expect(mockDispatch).toHaveBeenCalledWith({
            type: 'SET_PHONE',
            payload: '1234567890',
          });
  });
    it('shows error messages when form is invalid', async () => {
      const submitButton = screen.getByRole('button', { name: /Confirm & Submit/i });

      await act( async () => {
        fireEvent.click(submitButton)
       });

      expect(screen.getByText(/Please select a reservation date./i)).toBeInTheDocument();
      expect(screen.getByText(/Please select a reservation time./i)).toBeInTheDocument();
      expect(screen.getByText(/Please select the number of guests./i)).toBeInTheDocument();
     expect(screen.getByText(/Full name is required./i)).toBeInTheDocument();
    expect(screen.getByText(/A valid email address is required./i)).toBeInTheDocument();
    expect(screen.getByText(/A valid 10-digit phone number is required./i)).toBeInTheDocument();
  });
});