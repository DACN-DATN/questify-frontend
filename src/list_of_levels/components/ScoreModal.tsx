import React, { useEffect, useCallback, forwardRef } from 'react';

interface Player {
  name: string;
  score: number;
}

interface ScoreModalProps {
  isScoreModalOpen: boolean;
  onClose: () => void;
  players: Player[];
}

const ScoreModal = forwardRef<HTMLDivElement, ScoreModalProps>(
  ({ isScoreModalOpen, onClose, players }, ref) => {
    const handleClickOutside = useCallback(
      (event: MouseEvent) => {
        if ((event.target as HTMLElement).closest('.score-modal-content') === null) {
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

    if (!isScoreModalOpen) return null; // If modal is not open, render nothing.

    return (
      <div
        className="score-modal fixed inset-0 flex justify-center items-center z-10"
        style={{
          zIndex: 10,
        }}
      >
        <div
          ref={ref}
          className="score-modal-content bg-orange-200 rounded-lg border-4 border-stone-600 shadow-lg w-96 p-6 relative"
        >
          {/* Close Modal Button */}
          <button onClick={onClose} className="absolute top-2 right-2 text-red-500 text-2xl">
            &times; {/* X icon */}
          </button>

          <h2 className="font-bold text-2xl text-center mb-4">Top Players</h2>

          {/* Table */}
          <div
            className="mt-4 overflow-x-auto max-h-72"
            style={{
              scrollbarWidth: 'none', // For Firefox
              msOverflowStyle: 'none', // For Internet Explorer 10+
            }}
          >
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left border border-gray-500">Name</th>
                  <th className="py-2 px-4 text-left border border-gray-500">Score</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b border-r border-l border-gray-500">
                      {player.name}
                    </td>
                    <td className="py-2 px-4 border-b border-r border-gray-500">{player.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  },
);

ScoreModal.displayName = 'ScoreModal';

export default ScoreModal;
