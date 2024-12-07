// src/components/ScoreModal.js
import React, { useEffect } from 'react';

function ScoreModal({ isScoreModalOpen, onClose, players }) {
  const handleClickOutside = (event) => {
    if (event.target.closest('.score-modal-content') === null) {
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
    isScoreModalOpen && (
      <div
        className="score-modal absolute p-4 bg-white rounded-lg border-4 border-[#FF6347] shadow-lg w-60"
        style={{
          zIndex: 10,
        }}
      >
        <div className="score-modal-content">
          <h2 className="font-bold text-xl text-center">Top Players</h2>
          <ul className="mt-2">
            {players.map((player, index) => (
              <li key={index} className="flex justify-between">
                <span>{player.name}</span>
                <span>{player.score}</span>
              </li>
            ))}
          </ul>

          {/* Close Modal Button */}
          <button
            onClick={onClose}
            className="close-modal-btn mt-4 w-full py-2 bg-gray-300 rounded text-center"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}

export default ScoreModal;
