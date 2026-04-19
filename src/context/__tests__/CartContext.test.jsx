import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { CartProvider, useCart } from '../CartContext';

const sampleProduct = {
  id: 100,
  name: 'Test Cake',
  price: 250,
};

function Harness() {
  const {
    addToCart,
    decrementQuantity,
    incrementQuantity,
    removeFromCart,
    totalItems,
    subtotal,
    cart,
  } = useCart();

  return (
    <View>
      <Text testID="total-items">{totalItems}</Text>
      <Text testID="subtotal">{subtotal}</Text>
      <Text testID="cart-size">{cart.length}</Text>

      <Pressable testID="add" onPress={() => addToCart(sampleProduct)}>
        <Text>Add</Text>
      </Pressable>
      <Pressable testID="increment" onPress={() => incrementQuantity(sampleProduct.id)}>
        <Text>Increment</Text>
      </Pressable>
      <Pressable testID="decrement" onPress={() => decrementQuantity(sampleProduct.id)}>
        <Text>Decrement</Text>
      </Pressable>
      <Pressable testID="remove" onPress={() => removeFromCart(sampleProduct.id)}>
        <Text>Remove</Text>
      </Pressable>
    </View>
  );
}

describe('CartContext', () => {
  it('adds and updates subtotal correctly', () => {
    const screen = render(
      <CartProvider>
        <Harness />
      </CartProvider>
    );

    fireEvent.press(screen.getByTestId('add'));
    fireEvent.press(screen.getByTestId('add'));

    expect(screen.getByTestId('total-items')).toHaveTextContent('2');
    expect(screen.getByTestId('subtotal')).toHaveTextContent('500');
    expect(screen.getByTestId('cart-size')).toHaveTextContent('1');
  });

  it('decrements and removes line items', () => {
    const screen = render(
      <CartProvider>
        <Harness />
      </CartProvider>
    );

    fireEvent.press(screen.getByTestId('add'));
    fireEvent.press(screen.getByTestId('increment'));
    fireEvent.press(screen.getByTestId('decrement'));

    expect(screen.getByTestId('total-items')).toHaveTextContent('1');

    fireEvent.press(screen.getByTestId('decrement'));
    expect(screen.getByTestId('cart-size')).toHaveTextContent('0');
    expect(screen.getByTestId('subtotal')).toHaveTextContent('0');
  });
});
