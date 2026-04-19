import React from 'react';
import './LiquidButton.css';

const LiquidButton = ({ children, onClick, className = '', icon: Icon, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`liquid-btn ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
};

export default LiquidButton;
