import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DishCard from './DishCard';

const mockDish = {
    dishImage: 'test-image.jpg',
    dishName: 'Test Dish',
    dishPrice: '$9.99',
    dishDescription: 'A test dish description.',
    dishOrderOnline: '/order',
  };
describe('DishCard Component', () => {
    beforeEach(() => {
      render(<DishCard {...mockDish} />);
    });

  it('renders dish image', () => {
    const dishImage = screen.getByAltText('Dish');
    expect(dishImage).toBeInTheDocument();
    expect(dishImage).toHaveAttribute('src',mockDish.dishImage)
  });

  it('renders dish name and price', () => {
    const dishName = screen.getByText(mockDish.dishName);
    const dishPrice = screen.getByText(mockDish.dishPrice);

    expect(dishName).toBeInTheDocument();
    expect(dishPrice).toBeInTheDocument();
  });

  it('renders dish description', () => {
    const description = screen.getByText(mockDish.dishDescription);
      expect(description).toBeInTheDocument();
  });

  it('renders "Order Online" link', () => {
    const orderLink = screen.getByText('Order Online');
    expect(orderLink).toBeInTheDocument();
    expect(orderLink).toHaveAttribute('href',mockDish.dishOrderOnline);
  });
   it('renders the bike icon', () => {
      const bikeIcon = screen.getByAltText('bike Icon');
      expect(bikeIcon).toBeInTheDocument();
  });
});