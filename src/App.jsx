import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CategoryPills from './components/CategoryPills';
import MenuMatrix from './components/MenuMatrix';
import CartSidebar from './components/CartSidebar';
import { CartProvider } from './context/CartContext';

function App() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [currentView, setCurrentView] = useState('home');

  return (
    <CartProvider>
      <div className="app-container">
        <Header currentView={currentView} setCurrentView={setCurrentView} />
        
        {currentView === 'home' || currentView === 'menu' ? (
          <main className="main-content">
            <HeroBanner />
            <CategoryPills 
              activeCategory={activeCategory} 
              onSelectCategory={setActiveCategory} 
            />
            <MenuMatrix activeCategory={activeCategory} />
          </main>
        ) : currentView === 'cart' ? (
          <div className="cart-page-view">
            <CartSidebar />
          </div>
        ) : null}
        
      </div>
    </CartProvider>
  );
}

export default App;
