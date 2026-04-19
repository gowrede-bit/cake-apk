import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppShell from './src/AppShell';
import { CartProvider } from './src/context/CartContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <CartProvider>
        <AppShell />
      </CartProvider>
    </SafeAreaProvider>
  );
}
