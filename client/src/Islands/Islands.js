import React, { useRef } from 'react';
import './style.css';
import { Island1Image } from './images/images';
import Island from './Island';

const islandsData = [
  { svg: Island1Image, name: 'STACK', progress: '10/58', level: 1 },
  { svg: Island1Image, name: 'TWO POINTERS', progress: '0/58', level: 1 },
  { svg: Island1Image, name: 'QUEUE', progress: '0/58', level: 1 },
  { svg: Island1Image, name: 'STACK', progress: '10/58', level: 2 },
  { svg: Island1Image, name: 'TWO POINTERS', progress: '0/58', level: 3 },
  { svg: Island1Image, name: 'QUEUE', progress: '0/58', level: 4 },
  { svg: Island1Image, name: 'STACK', progress: '10/58', level: 4 },
  { svg: Island1Image, name: 'TWO POINTERS', progress: '0/58', level: 5 },
  { svg: Island1Image, name: 'QUEUE', progress: '0/58', level: 6 },
  { svg: Island1Image, name: 'STACK', progress: '10/58', level: 7 },
  { svg: Island1Image, name: 'TWO POINTERS', progress: '0/58', level: 7 },
  { svg: Island1Image, name: 'QUEUE', progress: '0/58', level: 8 },
];

const Islands = () => {
  const dragContainerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const container = dragContainerRef.current;
    container.isDragging = true;
    container.startX = e.pageX - container.offsetLeft;
    container.startY = e.pageY - container.offsetTop;
    container.scrollLeftStart = container.scrollLeft;
    container.scrollTopStart = container.scrollTop;
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    const container = dragContainerRef.current;
    if (!container.isDragging) return;
    const x = e.pageX - container.offsetLeft;
    const y = e.pageY - container.offsetTop;
    const walkX = (x - container.startX) * 2;
    const walkY = (y - container.startY) * 2;
    container.scrollLeft = container.scrollLeftStart - walkX;
    container.scrollTop = container.scrollTopStart - walkY;
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    const container = dragContainerRef.current;
    container.isDragging = false;
  };

  const groupedIslands = islandsData.reduce((acc, island) => {
    if (!acc[island.level]) {
      acc[island.level] = [];
    }
    acc[island.level].push(island);
    return acc;
  }, {});

  return (
    <div
      className="background-container"
      ref={dragContainerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="islands-grid">
        {Object.keys(groupedIslands).map((level) => (
          <div key={level} className="island-column">
            {groupedIslands[level].map((island, index) => (
              <Island
                key={index}
                svg={island.svg}
                name={island.name}
                progress={island.progress}
                level={island.level}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Islands;
