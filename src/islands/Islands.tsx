import React, { useRef } from 'react';
import Island from './Island';
import style from '@/styles/Islands.module.css';
import Island1Image from '@/assets/images/Island_1.svg';

interface IslandData {
  svg: string;
  name: string;
  progress: string;
  level: number;
  status: string;
}

const islandsData: IslandData[] = [
  {
    svg: Island1Image,
    name: 'ARRAY & HASHING',
    progress: '58/58',
    level: 1,
    status: 'available',
  },
  {
    svg: Island1Image,
    name: 'TWO POINTERS',
    progress: '58/58',
    level: 2,
    status: 'available',
  },
  {
    svg: Island1Image,
    name: 'STACK',
    progress: '58/58',
    level: 2,
    status: 'available',
  },
  {
    svg: Island1Image,
    name: 'BINARY SEARCH',
    progress: '58/58',
    level: 3,
    status: 'available',
  },
  {
    svg: Island1Image,
    name: 'SLIDING WINDOW',
    progress: '58/58',
    level: 3,
    status: 'available',
  },
  {
    svg: Island1Image,
    name: 'LINKED LIST',
    progress: '58/58',
    level: 3,
    status: 'available',
  },
  {
    svg: Island1Image,
    name: 'TREES',
    progress: '58/58',
    level: 4,
    status: 'available',
  },
  {
    svg: Island1Image,
    name: 'TRIES',
    progress: '15/58',
    level: 5,
    status: 'available',
  },
  {
    svg: Island1Image,
    name: 'HEAP/PRIORITY QUEUE',
    progress: '0/58',
    level: 6,
    status: 'locked',
  },
  {
    svg: Island1Image,
    name: 'GRAPHS',
    progress: '0/58',
    level: 6,
    status: 'locked',
  },
  {
    svg: Island1Image,
    name: '1-D DP',
    progress: '0/58',
    level: 6,
    status: 'locked',
  },
  {
    svg: Island1Image,
    name: 'INTARVALS',
    progress: '0/58',
    level: 7,
    status: 'locked',
  },
  {
    svg: Island1Image,
    name: 'GREEDY',
    progress: '0/58',
    level: 7,
    status: 'locked',
  },
  {
    svg: Island1Image,
    name: 'ADVANCED GRAPHS',
    progress: '0/58',
    level: 7,
    status: 'locked',
  },
  {
    svg: Island1Image,
    name: '2-D DP',
    progress: '0/58',
    level: 7,
    status: 'locked',
  },
  {
    svg: Island1Image,
    name: 'BIT MANIPULATION',
    progress: '0/58',
    level: 7,
    status: 'locked',
  },
  {
    svg: Island1Image,
    name: 'MATH&GEOMETRY',
    progress: '0/58',
    level: 8,
    status: 'locked',
  },
];

interface DraggableDivElement extends HTMLDivElement {
  isDragging?: boolean;
  startX?: number;
  startY?: number;
  scrollLeftStart?: number;
  scrollTopStart?: number;
}

const Islands: React.FC = () => {
  const dragContainerRef = useRef<DraggableDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const container = dragContainerRef.current;
    if (container) {
      container.isDragging = true;
      container.startX = e.pageX - container.offsetLeft;
      container.startY = e.pageY - container.offsetTop;
      container.scrollLeftStart = container.scrollLeft;
      container.scrollTopStart = container.scrollTop;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = dragContainerRef.current;
    if (container && container.isDragging) {
      const x = e.pageX - container.offsetLeft;
      const y = e.pageY - container.offsetTop;
      const walkX = (x - container.startX!) * 2;
      const walkY = (y - container.startY!) * 2;
      container.scrollLeft = container.scrollLeftStart! - walkX;
      container.scrollTop = container.scrollTopStart! - walkY;
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const container = dragContainerRef.current;
    if (container) {
      container.isDragging = false;
    }
  };

  const groupedIslands = islandsData.reduce((acc: { [key: number]: IslandData[] }, island) => {
    if (!acc[island.level]) {
      acc[island.level] = [];
    }
    acc[island.level].push(island);
    return acc;
  }, {});

  return (
    <div
      className={style.background__container}
      ref={dragContainerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={style.islands__grid}>
        {Object.keys(groupedIslands).map((level) => (
          <div key={level} className={style.island__column}>
            {groupedIslands[Number(level)].map((island, index) => (
              <Island
                key={index}
                svg={island.svg}
                name={island.name}
                progress={island.progress}
                status={island.status}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Islands;
