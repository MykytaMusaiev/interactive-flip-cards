import React from 'react';
import './CardFront.css';
import type { CardFrontProps } from '../../shared/types';

const CATEGORY_ICON: Record<string, string> = {
  fire: '🔥',
  water: '💧',
  earth: '🌍',
  air: '💨',
};

const CardFront: React.FC<CardFrontProps> = ({ card, onToggleFavorite }) => {
  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onToggleFavorite(card.id);
  };

  return (
    <div className="card-front">
      <img
        className="card-front__image"
        src={card.image}
        alt={card.title}
        draggable={false}
      />

      <button
        className={`card-front__favorite ${card.isFavorite ? 'card-front__favorite--active' : ''}`}
        onClick={handleFavorite}
        aria-label={card.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {card.isFavorite ? '⭐' : '☆'}
      </button>

      <div className="card-front__footer">
        <span className="card-front__category">
          {CATEGORY_ICON[card.category]}
          <span>{card.category}</span>
        </span>
        <h3 className="card-front__title">{card.title}</h3>
      </div>
    </div>
  );
};

export default CardFront;