import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';
import type { HeaderProps } from '../../shared/types';

const Header: React.FC<HeaderProps> = ({
  favoritesCount,
  totalCount,
  theme,
  onToggleTheme,
}) => {
  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__title">Card Collection</h1>
        <p className="header__subtitle">Hover or tap a card to flip it</p>
      </div>

      <div className="header__right">
        <div className="header__favorites">
          <span className="header__favorites-icon">⭐</span>
          <span className="header__favorites-count">
            {favoritesCount} / {totalCount}
          </span>
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
};

export default Header;