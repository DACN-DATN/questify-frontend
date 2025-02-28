import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, MonitorPlay, Video, HelpCircle } from 'lucide-react';
import ContentCard from './ContentCard';

const cards = [
  {
    id: 1,
    type: 'standard',
    content: {
      title: 'A title slide',
      content: 'TWO SUM',
    },
  },
  {
    id: 2,
    type: 'video',
    content: {
      title: 'Video',
      videoSrc: 'LnTFY25NC8s',
    },
  },
  {
    id: 3,
    type: 'quiz',
    content: {
      title: 'Quiz',
      questionText: 'What is the most efficient time complexity for solving the Two Sum problem?',
      options: ['O(n)', 'O(1)'],
      answer: 'O(n)',
      explaination:
        'Using a hash map, you can find the solution in linear time by checking for the complement of each number as you iterate through the array.',
    },
  },
];

export default function CourseViewer() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrevClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const handleCardClick = (index: number) => {
    setCurrentCardIndex(index);
  };

  const handleFullScreen = () => {
    if (contentRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        contentRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="grid h-screen grid-cols-[280px_1fr] bg-zinc-950">
      {/* Sidebar */}
      <div className="border-r border-zinc-800 bg-zinc-950">
        <div className="flex items-center p-4">
          <div className="h-8 w-8 bg-gray-500 rounded-md mr-2"></div>
          <div>
            <h1 className="text-sm text-zinc-400">Level 2</h1>
            <p className="text-xs text-zinc-500">{cards.length} slides</p>
          </div>
        </div>
        <div className="px-2">
          <h2 className="mb-2 px-2 text-lg font-semibold text-zinc-100">Slides</h2>
          <div className="h-[calc(100vh-120px)]">
            {cards.map((card, index) => (
              <button
                key={card.id}
                className="w-full flex items-center justify-start gap-2 rounded-lg px-2 py-1 text-left text-zinc-400 hover:bg-zinc-800/50"
                onClick={() => handleCardClick(index)}
              >
                {card.type === 'standard' && <MonitorPlay className="h-4 w-4" />}
                {card.type === 'video' && <Video className="h-4 w-4" />}
                {card.type === 'quiz' && <HelpCircle className="h-4 w-4" />}
                {card?.content?.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col" ref={contentRef}>
        <div className="relative flex-1 p-6 flex items-center justify-center">
          {/* Left Navigation Button */}
          <button
            onClick={handlePrevClick}
            className="h-10 w-10 rounded-full bg-zinc-800/50 hover:bg-zinc-800 flex items-center justify-center"
            disabled={currentCardIndex <= 0}
          >
            <ChevronLeft
              className={`h-6 w-6 ${currentCardIndex > 0 ? 'text-white' : 'text-gray-400'}`}
            />
            <span className="sr-only">Previous slide</span>
          </button>

          {/* Content Card */}
          <div className="mx-4 p-6 rounded-xl h-full w-4/5">
            <ContentCard
              type={cards[currentCardIndex].type}
              content={cards[currentCardIndex].content}
              currentPage={currentCardIndex + 1}
              totalPages={cards.length}
            />
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={handleNextClick}
            className="h-10 w-10 rounded-full bg-zinc-800/50 hover:bg-zinc-800 flex items-center justify-center"
            disabled={currentCardIndex >= cards.length - 1}
          >
            <ChevronRight
              className={`h-6 w-6 ${currentCardIndex < cards.length - 1 ? 'text-white' : 'text-gray-400'}`}
            />
            <span className="sr-only">Next slide</span>
          </button>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between border-t border-zinc-800 bg-zinc-900/50 px-4 py-2">
          <div className="flex items-center gap-2">
            <button className="h-8 w-8 flex items-center justify-center">
              <span className="sr-only">Previous slide</span>
              <div className="h-2 w-2 rounded-full bg-zinc-500" />
            </button>
            <button className="h-8 w-8 flex items-center justify-center">
              <span className="sr-only">Current slide</span>
              <div className="h-2 w-2 rounded-full bg-indigo-500" />
            </button>
            <span className="text-xs text-zinc-400">
              {currentCardIndex + 1} / {cards.length}
            </span>
          </div>
          <button
            className="h-8 w-8 flex items-center justify-center text-white"
            onClick={handleFullScreen}
          >
            <Maximize2 />
            <span className="sr-only">Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
