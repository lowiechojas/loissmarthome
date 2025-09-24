import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import topics from '../data/topics.json';
import { Link } from 'react-router-dom';

const TopicScroller = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5; // or 7 based on your original layout

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + visibleCount < topics.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const cardWidth = 150; // Adjust if needed (Tailwind's w-50 = ~200px, adjust accordingly)

  return (
    <div className="w-full overflow-hidden max-w-screen-xl mx-auto py-10 px-4 md:mr-30 md:ml-30">
      <div className="flex items-center justify-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="p-2 text-white bg-gray-700 rounded-full disabled:opacity-30"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (cardWidth + 24)}px)`, // 24 is the gap-6
            }}
          >
            {topics.map((topic) => (
              <Link key={topic.id} to={`/electronics/${topic.slug}`}>
                <div
                  className="w-auto h-[10vh] lg:w-[10vw] lg:h-[30vh]  bg-white p-4 rounded-lg shadow-lg shadow-cyan-200 
                            transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer shrink-0"
                >
                  <div className="flex flex-col items-center">
                    <div>
                        <img
                          src={topic.image}
                          alt={topic.title}
                          className="w-[10vw] h-auto"
                        />
                    </div>

                    <div className='flex items-center justify-around'>
                        <h2 className="font-bold text-lg">{topic.title}</h2>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">{topic.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= topics.length}
          className="p-2 text-white bg-gray-700 rounded-full disabled:opacity-30"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TopicScroller;
