import React from 'react';
import './ThemeToggle.css';
import type { ThemeToggleProps } from '../../shared/types';
import { THEME_CONFIG } from '../../shared/conts/theme';


const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const config = THEME_CONFIG[theme];

  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${config.next} theme`}
    >
      {config.icon}
    </button>
  );
};

export default ThemeToggle;