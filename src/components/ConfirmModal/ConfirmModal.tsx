import React, { useEffect } from 'react';
import './ConfirmModal.css';
import type { ConfirmModalProps } from '../../shared/types';

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
      if (e.key === 'Enter') onConfirm();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onConfirm, onCancel]);

  return (
    <div className="modal__overlay" onClick={onCancel}>
      <div
        className="modal__window"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="modal__title">Delete Card</h3>
        <p className="modal__message">{message}</p>
        <div className="modal__actions">
          <button className="modal__btn modal__btn--cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="modal__btn modal__btn--confirm" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;