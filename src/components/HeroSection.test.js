import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from './HeroSection';
import { BrowserRouter } from 'react-router-dom';

describe('HeroSection Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
         <HeroSection />
       </BrowserRouter>
    );
  });

  it('renders the main heading', () => {
    const heading = screen.getByText('Little Lemon');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('secondary-color');
  });

    it('renders the sub heading', () => {
      const subHeading = screen.getByText('Chicago');
      expect(subHeading).toBeInTheDocument();
        expect(subHeading).toHaveClass('title-font');
    });

  it('renders the paragraph description', () => {
    const paragraph = screen.getByText(/Little Lemon is a charming neighborhood bistro/i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass('text-font');
  });

  it('renders the "Reserve a Table" button', () => {
    const reserveButton = screen.getByText('Reserve a Table');
    expect(reserveButton).toBeInTheDocument();
    expect(reserveButton).toHaveAttribute('href', '/BookingPage');
  });

    it('renders the image with correct class', () => {
        const heroImage = screen.getByAltText('Hero');
        expect(heroImage).toBeInTheDocument();
      expect(heroImage).toHaveClass('hero-section-img')
    });

});