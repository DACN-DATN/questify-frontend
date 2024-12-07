// src/components/LevelItem.js
import React, { useState, useRef, useEffect } from 'react';
import PlayButton2 from '../images/PlayButton2.svg';
import PlayButton1 from '../images/PlayButton1.svg';
import ScoreButton from '../images/ScoreButton.svg';
import PassedIcon from '../images/star.png';
import CurrentIcon from '../images/level-banner-unstarted.png';
import BronzeChestIcon from '../images/bronze-chest.png';
import LevelModal from './LevelModal';
import ScoreModal from './ScoreModal';

function LevelItem({ index, name, description, position, progress }) {
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
  const [isScoreModalOpen, setIsScoreModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [corner, setCorner] = useState('bottom-left');
  const [players, setPlayers] = useState([
    { name: 'Player 1', score: 100 },
    { name: 'Player 2', score: 95 },
    { name: 'Player 3', score: 90 },
    { name: 'Player 4', score: 85 },
    { name: 'Player 5', score: 80 },
    { name: 'Player 6', score: 75 },
    { name: 'Player 7', score: 70 },
    { name: 'Player 8', score: 65 },
    { name: 'Player 9', score: 60 },
    { name: 'Player 10', score: 55 },
    { name: 'Player 11', score: 50 },
    { name: 'Player 12', score: 45 },
    { name: 'Player 13', score: 40 },
    { name: 'Player 14', score: 35 },
    { name: 'Player 15', score: 30 },
    { name: 'Player 16', score: 25 },
    { name: 'Player 17', score: 20 },
    { name: 'Player 18', score: 15 },
    { name: 'Player 19', score: 10 },
    { name: 'Player 20', score: 5 },
  ]);

  const nodeRef = useRef(null);
  const levelModalRef = useRef(null); 
  const scoreModalRef = useRef(null); 

  const handleNodeClick = () => {
    setModalContent({ name, description, progress });
    setCorner(determineCorner(position));
    setIsLevelModalOpen(true);
  };


  const determineCorner = (nodePosition) => {
    return 'top-left'; 
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

  const getNodeIcon = () => {
    switch (progress) {
      case 'passed':
        return (
          <div
            className="w-6 h-6 rounded-full bg-red-500 border-2 border-yellow-500 flex justify-center items-center"
            title="Passed"
          >
            <img src={PassedIcon} className="w-6 h-6" />
          </div>
        );
      case 'current':
        return (
          <div
            className="w-6 h-6 rounded-full bg-yellow-300 border-2 border-green-700 flex justify-center items-center relative"
            title="Current"
          >
            <img 
              src={CurrentIcon} 
              alt="Current" 
              className="absolute w-12 h-15" // Adjust size of the flag
              style={{
                bottom: 8, // Align the root of the flag (the bottom) to the center of the circle
              }}
            />
          </div>
        );
      case 'not passed':
        return (
          <div
            className="w-6 h-6 rounded-full bg-gray-300 border-2 border-gray-500 flex justify-center items-center"
            title="Not Passed"
          >
            <img 
              src={BronzeChestIcon} 
              alt="Not Passed" 
              className="w-4 h-4" 
            />
          </div>
        );
      default:
        return null;
    }
  };

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
        className={`node cursor-pointer rounded-full`}
        onClick={handleNodeClick}
        style={{
          width: '30px',
          height: '30px',
        }}
      >
        {getNodeIcon()} 
      </div>
      
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
