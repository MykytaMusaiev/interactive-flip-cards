import React, { useState } from 'react';
import type { Card, ModalState } from './shared/types';
import { useTheme } from './shared/hooks/useTheme';
import { useFlipSound } from './shared/hooks/useFlipSound';
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';
import AddCardForm from './components/AddCardForm/AddCardForm';
import ConfirmModal from './components/ConfirmModal/ConfirmModal';
import './App.css';
import { usePersistentCards } from './shared/hooks/usePersistentCards';

const FLIP_SOUND_SRC = '/sounds/flip.mp3';
const INITIAL_MODAL: ModalState = { isOpen: false, cardId: null };

const App: React.FC = () => {
  const { cards, updateCards } = usePersistentCards();
  const [modal, setModal] = useState<ModalState>(INITIAL_MODAL);
  const { theme, toggleTheme } = useTheme();
  const { playFlip } = useFlipSound(FLIP_SOUND_SRC);

  const favoritesCount = cards.filter(c => c.isFavorite).length;

  const handleAddCard = (card: Card) => {
    updateCards([...cards, card]);
  };

  const handleDeleteRequest = (id: string) => {
    setModal({ isOpen: true, cardId: id });
  };

  const handleDeleteConfirm = () => {
    if (modal.cardId) {
      updateCards(cards.filter(c => c.id !== modal.cardId));
    }
    setModal(INITIAL_MODAL);
  };

  const handleDeleteCancel = () => {
    setModal(INITIAL_MODAL);
  };

  const handleToggleFavorite = (id: string) => {
    updateCards(
      cards.map(c => (c.id === id ? { ...c, isFavorite: !c.isFavorite } : c))
    );
  };

  const handleReorder = (reordered: Card[]) => {
    updateCards(reordered);
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