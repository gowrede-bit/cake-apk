import React from 'react';
import LiquidGlassCard from './LiquidGlassCard';
import { categories } from '../data/menu';

const CategoryPills = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="category-pills">
      <LiquidGlassCard
        onClick={() => onSelectCategory('ALL')}
        className="pill-card"
        style={{
          background: activeCategory === 'ALL' ? 'rgba(255,255,255,0.4)' : undefined,
          color: activeCategory === 'ALL' ? 'var(--accent-purple)' : undefined
        }}
      >
        ALL DELIGHTS
      </LiquidGlassCard>
      {categories.map((cat) => (
        <LiquidGlassCard 
          key={cat} 
          onClick={() => onSelectCategory(cat)}
          className="pill-card"
          style={{
            background: activeCategory === cat ? 'rgba(255,255,255,0.4)' : undefined,
            color: activeCategory === cat ? 'var(--accent-purple)' : undefined
          }}
        >
          {cat}
        </LiquidGlassCard>
      ))}
    </div>
  );
};

export default CategoryPills;
