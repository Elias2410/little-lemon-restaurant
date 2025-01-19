import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';

describe('About Component', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('renders the restaurant name', () => {
    const restaurantName = screen.getByText('Little Lemon');
    expect(restaurantName).toBeInTheDocument();
  });

   it('renders the restaurant location', () => {
      const location = screen.getByText('Chicago');
      expect(location).toBeInTheDocument();
    });

  it('renders the about description', () => {
    const description = screen.getByText(/Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint./i);
    expect(description).toBeInTheDocument();
  });
  it('renders all the three image', () => {
      const image1 = screen.getAllByRole('img')[0];
      const image2 = screen.getAllByRole('img')[1];
      const image3 = screen.getAllByRole('img')[2];

       expect(image1).toBeInTheDocument();
      expect(image2).toBeInTheDocument();
       expect(image3).toBeInTheDocument();
  });
});