import React, { useState } from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';
import './FlipCard.css';
import type { FlipCardProps } from '../../shared/types';

const FlipCard: React.FC<FlipCardProps> = ({
  card,
  index,
  dragIndex,
  onDelete,
  onToggleFavorite,
  onDragStart,
  onDragOver,
  onDragEnd,
  onFlip,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const isDragging = dragIndex === index;

  const handleMouseEnter = () => {
    setIsFlipped(true);
    onFlip();
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
    onFlip();
  };

  return (
    <div
      className={`flip-card ${card.isFavorite ? 'flip-card--favorite' : ''}`}
      draggable
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDragEnd={onDragEnd}
    >
      <div
        className={`flip-card__inner
          ${isFlipped ? 'flip-card__inner--flipped' : ''}
          ${isDragging ? 'flip-card__inner--dragging' : ''}
        `}
      >
        <div className="flip-card__face flip-card__face--front">
          <CardFront card={card} onToggleFavorite={onToggleFavorite} />
        </div>
        <div className="flip-card__face flip-card__face--back">
          <CardBack card={card} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;