import React, { useState } from 'react';
import type { Card } from './shared/types';
import { initialCards } from './shared/data/cards';
import { useTheme } from './shared/hooks/useTheme';
import { useFlipSound } from './shared/hooks/useFlipSound';
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';
import AddCardForm from './components/AddCardForm/AddCardForm';
import './App.css';

const FLIP_SOUND_SRC = '/sounds/flip.mp3';

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(initialCards);
  const { theme, toggleTheme } = useTheme();
  const { playFlip } = useFlipSound(FLIP_SOUND_SRC);

  const favoritesCount = cards.filter(c => c.isFavorite).length;

  const handleAddCard = (card: Card) => {
    setCards(prev => [...prev, card]);
  };

  const handleDeleteCard = (id: string) => {
    setCards(prev => prev.filter(c => c.id !== id));
  };

  const handleToggleFavorite = (id: string) => {
    setCards(prev =>
      prev.map(c => (c.id === id ? { ...c, isFavorite: !c.isFavorite } : c))
    );
  };

  const handleReorder = (reordered: Card[]) => {
    setCards(reordered);
  };

  return (
    <div className="app">
      <Header
        favoritesCount={favoritesCount}
        totalCount={cards.length}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="app__main">
        <AddCardForm onAddCard={handleAddCard} />
        <CardGrid
          cards={cards}
          onDelete={handleDeleteCard}
          onToggleFavorite={handleToggleFavorite}
          onReorder={handleReorder}
          onFlip={playFlip}
        />
      </main>
    </div>
  );
};

export default App;