import React from 'react';
import type { FilterBarProps, FilterCategory } from '../../shared/types';
import './FilterBar.css';

const FILTERS: { value: FilterCategory; label: string; icon: string }[] = [
  { value: 'all', label: 'All', icon: '🐉' },
  { value: 'fire', label: 'Fire', icon: '🔥' },
  { value: 'water', label: 'Water', icon: '💧' },
  { value: 'earth', label: 'Earth', icon: '🌍' },
  { value: 'air', label: 'Air', icon: '💨' },
];

const FilterBar: React.FC<FilterBarProps> = ({ active, onChange }) => {
  return (
    <div className="filter-bar">
      {FILTERS.map(({ value, label, icon }) => (
        <button
          key={value}
          className={`filter-bar__btn ${active === value ? 'filter-bar__btn--active' : ''}`}
          onClick={() => onChange(value)}
        >
          <span>{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterBar;