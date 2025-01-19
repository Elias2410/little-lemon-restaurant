import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveClass('navigation-bar-logo');
  });

  it('initially does not display the navigation links on mobile view', () => {
    const navLinks = screen.queryByRole('list');
    expect(navLinks).not.toHaveClass('active');
  });

  it('displays burger icon on smaller screen size', () => {
    const burgerIcon = screen.getByRole('button');
    expect(burgerIcon).toBeInTheDocument();
  });

  it('toggles the navigation links when burger icon is clicked', () => {
    const burgerIcon = screen.getByRole('button');
    fireEvent.click(burgerIcon);

    const navLinks = screen.getByRole('list');
    expect(navLinks).toHaveClass('active');

    fireEvent.click(burgerIcon); // Close the menu
    expect(navLinks).not.toHaveClass('active');
  });

   it('renders navigation links', () => {
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const menuLink = screen.getByText('Menu');
    const reservationsLink = screen.getByText('Reservations');
    const loginLink = screen.getByText('Login');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(reservationsLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });
});