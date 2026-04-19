import React, { useState, useEffect } from 'react';

const heroItems = [
  { img: '/src/assets/truffle_cake.png', alt: 'Chocolate Truffle Cake', label: 'Chocolate Truffle Cake' },
  { img: '/src/assets/croissant.png', alt: 'Freshly Baked Croissant', label: 'Freshly Baked Croissant' },
  { img: '/src/assets/black_forest_cake.png', alt: 'Black Forest Cake', label: 'Black Forest Cake' },
  { img: '/src/assets/celebration_cake.png', alt: 'Celebration Cake', label: 'Celebration Cake' },
  { img: '/src/assets/chicken_frankie.png', alt: 'Chicken Frankie', label: 'Chicken Frankie' },
  { img: '/src/assets/sweet_corn_pizza.png', alt: 'Sweet Corn Pizza', label: 'Sweet Corn Pizza' },
  { img: '/src/assets/puff_selection.png', alt: 'Puff Selection', label: 'Puff Selection' },
  { img: '/src/assets/shake_flight.png', alt: 'Shake Flight', label: 'Shake Flight' },
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === heroItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const moveLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroItems.length - 1 : prev - 1));
  };

  const moveRight = () => {
    setCurrentIndex((prev) => (prev === heroItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h2>'Indulge in Happiness,<br/>Delivered Fresh!'</h2>
      </div>
      <div className="hero-carousel-wrapper" style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={moveLeft} style={{ position: 'absolute', left: '10%', zIndex: 10, background: 'rgba(255,255,255,0.3)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', color: 'white', fontWeight: 'bold', fontSize: '20px' }}>&lt;</button>
        
        <div className="hero-graphics" style={{ overflow: 'hidden', width: '100%', maxWidth: '400px' }}>
          <div style={{ display: 'flex', width: '100%', transition: 'transform 0.5s ease-in-out', transform: `translateX(-${currentIndex * 100}%)` }}>
            {heroItems.map((item, idx) => (
              <div key={idx} style={{ minWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className="hero-product-container">
                  <div className="hero-product-circle liquid-glass">
                    <img src={item.img} alt={item.alt} className="hero-product-img" />
                  </div>
                  <span style={{ fontWeight: 'bold', display: 'block', marginTop: '12px' }}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={moveRight} style={{ position: 'absolute', right: '10%', zIndex: 10, background: 'rgba(255,255,255,0.3)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', color: 'white', fontWeight: 'bold', fontSize: '20px' }}>&gt;</button>
      </div>
    </div>
  );
};

export default HeroBanner;
