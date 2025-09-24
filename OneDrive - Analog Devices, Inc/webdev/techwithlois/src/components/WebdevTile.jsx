import React from 'react';
import { Link } from 'react-router-dom'; // <-- you forgot this!
import webprog from '../data/webdev.json';

const WebdevTile = () => {
  return (
    <div className="flex flex-row gap-6 md:mr-30 md:ml-30">
      <div className="flex flex-row flex-wrap gap-6 h-auto p-4 items-center justify-around">
        {webprog.slice(0, 12).map((item) => (
          <Link
            key={item.id}
            to={`/webdev/${item.slug}`}
            className="bg-white p-4 rounded-xl shadow-lg shadow-blue-400
                       w-full sm:w-1/2 md:w-[20vw] line-clamp-2
                       transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            <div className="flex items-center mb-2">
              <img
                src={item.favicon}
                alt={`${item.title}`}
                className="w-6 h-6 mr-2"
              />
              <h2 className="font-bold text-lg">{item.title}</h2>
            </div>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WebdevTile;
