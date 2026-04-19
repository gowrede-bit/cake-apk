import React from 'react';
import LiquidGlassCard from './LiquidGlassCard';
import LiquidButton from './LiquidButton';
import { useCart } from '../context/CartContext';
import { menuItems } from '../data/menu';

const MenuMatrix = ({ activeCategory }) => {
  const { cart, addToCart, incrementQuantity, decrementQuantity, removeFromCart } = useCart();
  
  const filteredItems = activeCategory === 'ALL' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div>
      <h2 className="section-title">
        {activeCategory === 'ALL' ? 'Our Signature Delights' : activeCategory}
      </h2>
      <div className="product-grid">
        {filteredItems.map(item => (
          <LiquidGlassCard key={item.id} className="product-card">
            <div className="product-image" style={{ background: item.image ? 'transparent' : 'rgba(0,0,0,0.05)', padding: item.image ? '0' : '16px' }}>
              {item.image ? (
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', mixBlendMode: 'multiply' }} />
              ) : (
                item.isVegetarian ? '🥬' : '🍗'
              )}
            </div>
            <div className="product-info">
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{color: '#EAB308', fontSize: '10px'}}>★★★★★</span>
                <span style={{fontSize: '10px', background: 'rgba(255,255,255,0.4)', padding: '2px 6px', borderRadius: '4px'}}>Fresh Daily</span>
              </div>
              <h3 style={{marginTop: '8px'}}>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="product-footer">
              <span className="product-price">Rs. {item.price}/-</span>
              {(() => {
                const cartItem = cart.find(ci => ci.product.id === item.id);
                if (cartItem) {
                  return (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)' }}>
                      <button 
                        onClick={() => cartItem.quantity > 1 ? decrementQuantity(item.id) : removeFromCart(item.id)}
                        style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >-</button>
                      <span style={{ fontWeight: 'bold', fontSize: '14px', width: '20px', textAlign: 'center' }}>{cartItem.quantity}</span>
                      <button 
                        onClick={() => incrementQuantity(item.id)}
                        style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-purple)', border: 'none', cursor: 'pointer', color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >+</button>
                    </div>
                  );
                } else {
                  return (
                    <LiquidButton onClick={() => addToCart(item)} style={{padding: '6px 12px', fontSize: '12px'}}>
                      ADD <span style={{fontWeight: 'bold', marginLeft: '4px'}}>+</span>
                    </LiquidButton>
                  );
                }
              })()}
            </div>
          </LiquidGlassCard>
        ))}
      </div>
    </div>
  );
};

export default MenuMatrix;
