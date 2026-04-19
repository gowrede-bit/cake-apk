import React from 'react';
import logo from '../assets/logo_nobg.png';

const Header = ({ currentView, setCurrentView }) => {
  return (
    <>
      <header className="top-header">
        <div className="brand liquid-glass" style={{ cursor: 'pointer', padding: '8px 24px', borderRadius: '999px' }} onClick={() => setCurrentView('home')}>
          <img src={logo} alt="Cake Forest Logo" className="brand-logo" />
        </div>
        
        <div style={{ pointerEvents: 'auto', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div 
            className="cart-icon liquid-glass" 
            style={{ padding: '8px 16px', borderRadius: '999px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', color: currentView === 'cart' ? 'var(--accent-purple)' : 'inherit' }} 
            onClick={() => setCurrentView('cart')}
          >
            🛒 CART
          </div>
          <div className="user-profile liquid-glass">
            <div className="avatar">A</div>
            <span className="profile-name">Aadhya</span>
          </div>
        </div>
      </header>

      <nav className="bottom-nav liquid-glass">
        <div className="nav-links">
          <a href="#home" onClick={(e) => { e.preventDefault(); setCurrentView('home'); }} style={currentView === 'home' ? {color: 'var(--accent-purple)'} : {}}>HOME</a>
          <a href="#menu" onClick={(e) => { e.preventDefault(); setCurrentView('menu'); }} style={currentView === 'menu' ? {color: 'var(--accent-purple)'} : {}}>MENU</a>
          <a href="#track">TRACK ORDER</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
