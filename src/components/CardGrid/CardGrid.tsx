import React from 'react';
import FlipCard from '../FlipCard/FlipCard';
import './CardGrid.css';
import type { CardGridProps } from '../../shared/types';
import { useDragAndDrop } from '../../shared/hooks/useDragAndDrop';

const CardGrid: React.FC<CardGridProps> = ({
  cards,
  onDelete,
  onToggleFavorite,
  onReorder,
  onFlip,
}) => {
  const { dragIndex, onDragStart, onDragOver, onDragEnd } =
    useDragAndDrop(cards, onReorder);

  return (
    <div className="card-grid__wrapper">
      <p className="card-grid__hint">
        💡 Hint: Drag the cards to reorder them.
      </p>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={card.id} className="flip-card-wrapper">
            <FlipCard
              key={card.id}
              card={card}
              index={index}
              dragIndex={dragIndex}
              onDelete={onDelete}
              onToggleFavorite={onToggleFavorite}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDragEnd={onDragEnd}
              onFlip={onFlip}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;