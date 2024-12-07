// src/components/LevelItem.js
import React, { useState, useRef, useEffect } from 'react';
import LevelModal from './LevelModal';
import ScoreModal from './ScoreModal';
import PlayButton2 from '../images/PlayButton2.svg';
import PlayButton1 from '../images/PlayButton1.svg';
import ScoreButton from '../images/ScoreButton.svg';

function LevelItem({ index, name, description, position, progress }) {
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
  const [isScoreModalOpen, setIsScoreModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [corner, setCorner] = useState('bottom-left');
  const [players, setPlayers] = useState([
    { name: 'Player 1', score: 100 },
    { name: 'Player 2', score: 90 },
    { name: 'Player 3', score: 85 },
  ]);

  const nodeRef = useRef(null);
  const levelModalRef = useRef(null); // Ref for LevelModal
  const scoreModalRef = useRef(null); // Ref for ScoreModal

  const handleNodeClick = () => {
    setModalContent({ name, description, progress });
    setCorner(determineCorner(position));
    setIsLevelModalOpen(true);
  };


  const determineCorner = (nodePosition) => {
    return 'top-left'; 
  };

  const renderButtons = () => {
    switch (progress) {
      case 'not passed':
        return null; // No buttons for 'not passed' levels
      case 'current':
        return (
          <button className="play-button flex items-center gap-2">
            <img src={PlayButton1} alt="Play Button" />
          </button>
        );
      case 'passed':
        return (
          <>
            <button className="score-button flex items-center gap-2" onClick={() => setIsScoreModalOpen(true)}>
              <img src={ScoreButton} alt="Score Button" />
            </button>
            <button className="play-button flex items-center gap-2">
              <img src={PlayButton2} alt="Play Button" />
            </button>
          </>
        );
      default:
        return null;
    }
  };

  const handleLevelModalClose = () => {
    setIsLevelModalOpen(false);
  };

  const handleScoreModalClose = () => {
    setIsScoreModalOpen(false);
  };

  const getModalPosition = () => {
    if (nodeRef.current) {
      const nodeRect = nodeRef.current.getBoundingClientRect(); 

      let offsetX = 0;
      let offsetY = 0;

      switch (corner) {
        case 'bottom-right':
          offsetX = nodeRect.width;
          offsetY = nodeRect.height; 
          break;
        case 'top-right':
          offsetX = nodeRect.width; 
          offsetY = -nodeRect.height; 
          break;
        case 'bottom-left':
          offsetX = -nodeRect.width;
          offsetY = nodeRect.height; 
          break;
        case 'top-left':
          offsetX = -nodeRect.width; 
          offsetY = -nodeRect.height;
          break;
        default:
          break;
      }

      return {
        left: nodeRect.left + offsetX + window.scrollX, 
        top: nodeRect.top + offsetY + window.scrollY,
      };
    }
    return { left: 0, top: 0 }; 
  };

  const handleClickOutside = (event) => {
    if (scoreModalRef.current && !scoreModalRef.current.contains(event.target)) {
      setIsScoreModalOpen(false); // Close ScoreModal when clicked outside
    }
  };

  const handleLevelModalClickOutside = (event) => {
    if (levelModalRef.current && !levelModalRef.current.contains(event.target)) {
      setIsLevelModalOpen(false); // Close LevelModal when clicked outside
    }
  };

  // useEffect to close ScoreModal when clicked outside
  useEffect(() => {
    if (isScoreModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isScoreModalOpen]);

  // useEffect to close LevelModal when clicked outside
  useEffect(() => {
    if (isLevelModalOpen) {
      document.addEventListener('mousedown', handleLevelModalClickOutside);
    } else {
      document.removeEventListener('mousedown', handleLevelModalClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleLevelModalClickOutside);
    };
  }, [isLevelModalOpen]);

  return (
    <div
      id={`level-${index}`}
      className="level-item flex items-center justify-center"
      style={{
        position: 'absolute',
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      {/* Node icon */}
      <div
        className={`node ${progress === 'passed' ? 'bg-green-500' : 'bg-white'} rounded-full`}
        onClick={handleNodeClick}
        style={{
          width: '30px',
          height: '30px',
        }}
      />
      
      {/* Level Description Modal */}
      <LevelModal
        ref={levelModalRef}
        isModalOpen={isLevelModalOpen}
        modalPosition={getModalPosition()}
        modalContent={modalContent}
        onClose={handleLevelModalClose}
        renderButtons={renderButtons}
      />

      {/* Score Modal */}
      <ScoreModal
        ref={scoreModalRef}
        isScoreModalOpen={isScoreModalOpen}
        onClose={handleScoreModalClose}
        players={players}
      />
    </div>
  );
}

export default LevelItem;
