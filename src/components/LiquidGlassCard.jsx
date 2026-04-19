import React from 'react';

const LiquidGlassCard = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`liquid-glass liquid-card ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export default LiquidGlassCard;
