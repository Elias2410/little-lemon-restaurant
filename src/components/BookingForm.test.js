import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides additional matchers
import BookingForm from './BookingForm';

describe('BookingForm Component', () => {
  const mockDispatch = jest.fn();
  const initialState = {
    bookingDate: '14/01/2025',
    bookingTime: '12:00',
    numOfGuests: 2,
    tablePreference: 'Indoor',
    tableLocation: 'Near the Window',
    tableOccasion: 'Birthday',
    additionalRequest: '',
    userFullName: '',
    userEmail: '',
    userPhoneNumber: '',
    termsAndCondition: false,
    subscripeToUpdates: false,
  };

  beforeEach(() => {
    render(<BookingForm state={initialState} dispatch={mockDispatch} />);
  });

  it('renders the form with all fields', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByLabelText('Date of Reservation:')).toBeInTheDocument();
    expect(screen.getByLabelText('Time of Reservation:')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of Guests:')).toBeInTheDocument();
    expect(screen.getByLabelText('Full Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address:')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number:')).toBeInTheDocument();
    expect(screen.getByLabelText('I Agree to:')).toBeInTheDocument();
  });

  it('handles input changes and dispatches actions', () => {
    const fullNameInput = screen.getByLabelText('Full Name:');
    fireEvent.change(fullNameInput, { target: { name: 'NAME', value: 'John Doe' } });
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'SET_NAME', payload: 'John Doe' });

    const dateSelect = screen.getByLabelText('Date of Reservation:');
    fireEvent.change(dateSelect, { target: { name: 'DATE', value: '15/01/2025' } });
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'SET_DATE', payload: '15/01/2025' });

    const termsCheckbox = screen.getByLabelText('Terms and Conditions');
    fireEvent.click(termsCheckbox);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'SET_TERMS', payload: true });
  });

  it('submits the form correctly', () => {
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    // Replace with your logic for form submission
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('displays all dropdown options correctly', () => {
    const timeSelect = screen.getByLabelText('Time of Reservation:');
    fireEvent.click(timeSelect);
    expect(screen.getByText('12:00')).toBeInTheDocument();
    expect(screen.getByText('22:00')).toBeInTheDocument();
  });
});
