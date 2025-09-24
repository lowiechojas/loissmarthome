import React from 'react'
import proglang from '../data/programming.json'
import TopicDetailLayout from './TopicDetailLayout'
import { Link } from 'react-router-dom'

const Proglang = () => {
  return (
     <div className='flex flex-row gap-6 md:mr-30 md:ml-30'>
        <div className='flex flex-row flex-wrap gap-6 h-auto p-4 items-center justify-around'>
            {proglang.slice(0,12).map((item) => (
                    <Link
                    key={item.id}
                    to={`/programming/${item.slug}`}
                        className="bg-black text-gray-600 p-4 rounded-xl shadow-lg shadow-black
                                w-full sm:w-1/2 md:w-[20vw] line-clamp-2
                                transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                        <div className="flex items-center mb-2">
                            <img
                            src={item.favicon}
                            alt={`${item.title}`}
                            className="w-6 h-6 mr-2"
                            />
                            <h2 className="font-bold text-lg">{item.title}</h2>
                        </div>
                        <p className="text-white text-sm">{item.description}</p>
                    </Link>
            ))}
         </div>
    </div>
  )
}

export default Proglang