import React, { useState } from 'react';
import type { Card, ModalState } from './shared/types';
import { initialCards } from './shared/data/cards';
import { useTheme } from './shared/hooks/useTheme';
import { useFlipSound } from './shared/hooks/useFlipSound';
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';
import AddCardForm from './components/AddCardForm/AddCardForm';
import ConfirmModal from './components/ConfirmModal/ConfirmModal';
import './App.css';

const FLIP_SOUND_SRC = '/sounds/flip.mp3';
const INITIAL_MODAL: ModalState = { isOpen: false, cardId: null };

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(initialCards);
  const [modal, setModal] = useState<ModalState>(INITIAL_MODAL);
  const { theme, toggleTheme } = useTheme();
  const { playFlip } = useFlipSound(FLIP_SOUND_SRC);

  const favoritesCount = cards.filter(c => c.isFavorite).length;

  const handleAddCard = (card: Card) => {
    setCards(prev => [...prev, card]);
  };

  const handleDeleteRequest = (id: string) => {
    setModal({ isOpen: true, cardId: id });
  };

  const handleDeleteConfirm = () => {
    if (modal.cardId) {
      setCards(prev => prev.filter(c => c.id !== modal.cardId));
    }
    setModal(INITIAL_MODAL);
  };

  const handleDeleteCancel = () => {
    setModal(INITIAL_MODAL);
  };

  const handleToggleFavorite = (id: string) => {
    setCards(prev =>
      prev.map(c => (c.id === id ? { ...c, isFavorite: !c.isFavorite } : c))
    );
  };

  const handleReorder = (reordered: Card[]) => {
    setCards(reordered);
  };

  const deletingCard = cards.find(c => c.id === modal.cardId);

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
          onDelete={handleDeleteRequest}
          onToggleFavorite={handleToggleFavorite}
          onReorder={handleReorder}
          onFlip={playFlip}
        />
      </main>

      {modal.isOpen && deletingCard && (
        <ConfirmModal
          message={`Are you sure you want to delete "${deletingCard.title}"?`}
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
        />
      )}
    </div>
  );
};

export default App;