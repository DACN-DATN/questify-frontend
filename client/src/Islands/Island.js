import React from 'react';
import './style.css';
import { PlayButtonImage } from './images/images';

const Island = ({ svg, name, progress}) => {
  const handlePlayButtonClick = () => {
    console.log('Play button clicked');
  };

  return (
    <div className="island">
      <img src={svg} alt={name} className="island-image" />
      <button className="play-button" onClick={handlePlayButtonClick}>
        <div className="island__name">{name}</div>
        <div className="island__progress">{progress}</div>
        <img src={PlayButtonImage} alt="Play" />
      </button>
    </div>
  );
}

export default Island;