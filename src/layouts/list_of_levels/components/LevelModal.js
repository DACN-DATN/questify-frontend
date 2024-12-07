// src/components/LevelModal.js
import React, { useEffect } from 'react';

function LevelModal({ isModalOpen, modalPosition, modalContent, onClose, renderButtons }) {
  const handleClickOutside = (event) => {
    if (event.target.closest('.modal-content') === null) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    isModalOpen && (
      <div
        className="modal absolute p-4 bg-white rounded-lg border-4 border-[#FF6347] shadow-lg w-60"
        style={{
          left: `${modalPosition.left}px`,
          top: `${modalPosition.top}px`,
          zIndex: 10,
        }}
      >
        <div className="modal-content">
          {/* Level Name and Description */}
          <h2 className="font-bold text-xl text-center">{modalContent.name}</h2>
          <p className="text-center text-sm mt-2">{modalContent.description}</p>

          {/* Render Buttons Based on Progress */}
          <div className="buttons-container mt-4 flex justify-center gap-4">
            {renderButtons()}
          </div>

        </div>
      </div>
    )
  );
}

export default LevelModal;
