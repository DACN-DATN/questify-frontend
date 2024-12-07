import React from 'react';
import { levelsData } from './data/levelData';
import LevelItem from './components/LevelItem';
import bgImage from '../../assets/images/list_of_levels_bg.png';

function Levels(){  
    const getLineColor = (progress1, progress2) => {
        return progress1 === 'passed' && progress2 === 'passed' ? 'green' : 'white';
    };

    return (
        <div
            className="levels-container relative w-full h-screen bg-cover bg-center" 
            style={{ 
                backgroundImage: `url(${bgImage})`,
            }} 
        >
            <svg className="absolute w-full h-full pointer-events-none">
                {levelsData.slice(0, -1).map((level, index) => {
                    const nextLevel = levelsData[index + 1];
                    const lineColor = getLineColor(level.progress, nextLevel.progress);
                    const lineStartX = (level.position.x / 100) * window.innerWidth + 15;
                    const lineStartY = (level.position.y / 100) * window.innerHeight + 15;
                    const lineEndX = (nextLevel.position.x / 100) * window.innerWidth + 15;
                    const lineEndY = (nextLevel.position.y / 100) * window.innerHeight + 15;


                    return (
                        <line
                            key={`line-${level.id}-${nextLevel.id}`}
                            x1={lineStartX}
                            y1={lineStartY}
                            x2={lineEndX}
                            y2={lineEndY}
                            stroke={lineColor}
                            strokeWidth="2"
                            strokeDasharray="5,5" // Makes the line dashed
                        />
                );
            })}
            </svg>

            <div className="levels-list relative h-screen flex justify-center items-center">
            {levelsData.map((level, index) => (
                <LevelItem
                    key={level.id}
                    index={index}
                    name={level.name}
                    description={level.description}
                    position={level.position}
                    progress={level.progress}
                />
            ))}
            </div>
        </div> 
    );
}

export default Levels;