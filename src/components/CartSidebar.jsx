import React from 'react';
import { useCart } from '../context/CartContext';
import LiquidGlassCard from './LiquidGlassCard';
import LiquidButton from './LiquidButton';
import { menuItems } from '../data/menu';

const CartSidebar = () => {
  const { cart, subtotal, incrementQuantity, decrementQuantity, addToCart } = useCart();
  
  // Cross-selling logic: Pick 2 random items under 100 Rs
  const popularPicks = menuItems.filter(item => item.price < 100).slice(0, 2);

  return (
    <aside className="sidebar">
      <div className="popular-picks">
        <div style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '16px'}}>Popular Picks</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          {popularPicks.map(item => (
            <LiquidGlassCard key={item.id} style={{padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
                <div style={{width: '40px', height: '40px', background: 'rgba(0,0,0,0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>🍲</div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <span style={{fontWeight: 'bold', fontSize: '13px'}}>{item.name}</span>
                  <span style={{fontSize: '12px', color: 'var(--text-secondary)'}}>Rs. {item.price}/-</span>
                </div>
              </div>
              <button 
                onClick={() => addToCart(item)}
                style={{background: 'none', border: 'none', fontSize: '18px', color: 'var(--accent-purple)', cursor: 'pointer', fontWeight: 'bold'}}
              >
                +
              </button>
            </LiquidGlassCard>
          ))}
        </div>
      </div>
      
      <LiquidGlassCard className="cart-widget">
        <div className="cart-header">
          Your Cart <span role="img" aria-label="cart">🛒</span>
        </div>
        <div className="cart-items" style={{marginTop: '12px'}}>
          {cart.length === 0 && <p style={{opacity: 0.6, fontSize: '14px'}}>Cart is empty</p>}
          {cart.map((cartItem) => (
            <div key={cartItem.product.id} className="cart-item">
              <div className="cart-item-info">
                <span style={{color: 'var(--accent-purple)', fontWeight: 'bold'}}>{cartItem.quantity}x</span>
                <span style={{fontWeight: '600'}}>&apos;{cartItem.product.name}&apos;</span>
              </div>
              <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                <button 
                  onClick={() => decrementQuantity(cartItem.product.id)} 
                  style={{width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer', fontWeight: 'bold'}}
                >-</button>
                <button 
                  onClick={() => incrementQuantity(cartItem.product.id)} 
                  style={{width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer', fontWeight: 'bold'}}
                >+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <span>Total</span>
          <span>Rs. {subtotal}/-</span>
        </div>
        <LiquidButton style={{width: '100%', marginTop: '8px'}}>Fluid Checkout</LiquidButton>
      </LiquidGlassCard>
    </aside>
  );
};

export default CartSidebar;
