import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides additional matchers
import NavigationBar from './NavigationBar';
import { BrowserRouter } from 'react-router-dom';

describe('NavigationBar Component', () => {
  beforeEach(() => {
      render(
        <BrowserRouter>
            <NavigationBar />
          </BrowserRouter>
        );
      });

    it('renders the logo image', () => {
       const logoImage = screen.getByAltText("Logo")
        expect(logoImage).toBeInTheDocument();
        expect(logoImage).toHaveClass('navigation-bar-logo');
      });
  it('renders navigation links', () => {
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const menuLink = screen.getByText('Menu');
    const reservationsLink = screen.getByText('Reservations');
    const orderOnlineLink = screen.getByText('Order Online');
    const loginLink = screen.getByText('Login');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(reservationsLink).toBeInTheDocument();
    expect(orderOnlineLink).toBeInTheDocument();
      expect(loginLink).toBeInTheDocument();
  });
});