import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import AppShell from '../AppShell';
import { CartProvider } from '../context/CartContext';

const renderApp = () =>
  render(
    <CartProvider>
      <AppShell />
    </CartProvider>
  );

describe('AppShell integration', () => {
  it('switches between catalog and cart views', () => {
    const screen = renderApp();

    fireEvent.press(screen.getByTestId('header-cart-button'));

    expect(screen.getByText('Your Cart')).toBeTruthy();
    expect(screen.getByText('Popular Picks')).toBeTruthy();
  });

  it('filters menu by selected category', () => {
    const screen = renderApp();

    fireEvent.press(screen.getByTestId('category-BEVERAGES'));

    expect(screen.getByText('Virgin Mojito')).toBeTruthy();
    expect(screen.queryByText('Chicken Dum Briyani Single')).toBeNull();
  });

  it('updates cart count when adding an item', () => {
    const screen = renderApp();

    fireEvent.press(screen.getByTestId('add-button-21'));

    expect(screen.getByText('Cart (1)')).toBeTruthy();
  });
});
