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
}) => {
  const { dragIndex, onDragStart, onDragOver, onDragEnd } =
    useDragAndDrop(cards, onReorder);

  return (
    <div className="card-grid__wrapper">
      <p className="card-grid__hint">
        💡 Підказка: Перетягуйте картки, щоб змінити їх порядок
      </p>
      <div className="card-grid">
        {cards.map((card, index) => (
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
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;