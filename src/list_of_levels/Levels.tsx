import React, { useEffect, useState } from 'react';
import { levelsData } from './data/levelData';
import LevelItem from './components/levelItem';
import bgImage from '@/assets/images/list_of_levels_bg.png';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

interface WindowDimensions {
  width: number;
  height: number;
}

const Levels: React.FC = () => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); // Set initial dimensions
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getLineColor = (progress1: string, progress2: string) => {
    return progress1 === 'passed' && (progress2 === 'passed' || progress2 === 'current')
      ? 'green'
      : 'white';
  };

  return (
    <div className="app-container">
      <Header />
      <div
        className="levels-container relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <svg className="absolute w-full h-full pointer-events-none">
          {levelsData.slice(0, -1).map((level, index) => {
            const nextLevel = levelsData[index + 1];
            const lineColor = getLineColor(level.progress, nextLevel.progress);
            const lineStartX = (level.position.x / 100) * windowDimensions.width + 12;
            const lineStartY = (level.position.y / 100) * windowDimensions.height + 12;
            const lineEndX = (nextLevel.position.x / 100) * windowDimensions.width + 12;
            const lineEndY = (nextLevel.position.y / 100) * windowDimensions.height + 12;

            return (
              <line
                key={`line-${level.id}-${nextLevel.id}`}
                x1={lineStartX}
                y1={lineStartY}
                x2={lineEndX}
                y2={lineEndY}
                stroke={lineColor}
                strokeWidth="2"
              />
            );
          })}
        </svg>
        {levelsData.map((level) => (
          <LevelItem
            index={level.id}
            name={level.name}
            description={level.description}
            position={level.position}
            progress={level.progress}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Levels;
