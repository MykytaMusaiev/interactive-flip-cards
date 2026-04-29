import React from 'react';
import './CardBack.css';
import type { CardBackProps } from '../../shared/types';

const RARITY_COLOR: Record<string, string> = {
  common: '#6b7280',
  rare: '#3b82f6',
  epic: '#8b5cf6',
  legendary: '#f59e0b',
};

const CardBack: React.FC<CardBackProps> = ({ card, onDelete, onToggleFavorite }) => {
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDelete(card.id);
  };

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onToggleFavorite(card.id);
  };

  const { power, defense, speed, rarity } = card.stats;

  return (
    <div className="card-back">
      <div className="card-back__header">
        <h3 className="card-back__title">{card.title}</h3>
        <div className="card-back__header-right">
          <span
            className="card-back__rarity"
            style={{ color: RARITY_COLOR[rarity] }}
          >
            {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
          </span>
          <button
            className={`card-back__favorite ${card.isFavorite ? 'card-back__favorite--active' : ''}`}
            onClick={handleFavorite}
            aria-label={card.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {card.isFavorite ? '⭐' : '☆'}
          </button>
        </div>
      </div>

      <p className="card-back__description">{card.description}</p>

      <div className="card-back__stats">
        <div className="stat">
          <span className="stat__label">Power</span>
          <div className="stat__bar">
            <div className="stat__fill stat__fill--power" style={{ width: `${power}%` }} />
          </div>
          <span className="stat__value">{power}</span>
        </div>
        <div className="stat">
          <span className="stat__label">Defense</span>
          <div className="stat__bar">
            <div className="stat__fill stat__fill--defense" style={{ width: `${defense}%` }} />
          </div>
          <span className="stat__value">{defense}</span>
        </div>
        <div className="stat">
          <span className="stat__label">Speed</span>
          <div className="stat__bar">
            <div className="stat__fill stat__fill--speed" style={{ width: `${speed}%` }} />
          </div>
          <span className="stat__value">{speed}</span>
        </div>
      </div>

      <button className="card-back__delete" onClick={handleDelete}>
        🗑 Delete
      </button>
    </div>
  );
};

export default CardBack;