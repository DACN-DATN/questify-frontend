import React, { useEffect, useCallback } from 'react';

interface LevelModalProps {
  isModalOpen: boolean;
  modalPosition: { left: number; top: number };
  modalContent: {
    name: string;
    description: string;
    progress: 'passed' | 'current' | 'not passed';
  };
  onClose: () => void;
  renderButtons: () => React.ReactNode;
}

const LevelModal: React.FC<LevelModalProps> = ({
  isModalOpen,
  modalPosition,
  modalContent,
  onClose,
  renderButtons,
}) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('.modal-content') === null) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  if (!isModalOpen) return null;

  return (
    <div
      className="level-modal absolute p-4 bg-orange-200 rounded-lg border-4 border-stone-600 shadow-lg w-60"
      style={{
        left: `${modalPosition.left}%`,
        top: `${modalPosition.top}%`,
        zIndex: 10,
      }}
    >
      <div className="modal-content">
        <h2 className="font-bold text-xl text-center">{modalContent.name}</h2>
        <p className="text-center text-sm mt-2">{modalContent.description}</p>

        <div className="buttons-container mt-4 flex justify-center gap-4">{renderButtons()}</div>
      </div>
    </div>
  );
};

export default LevelModal;
