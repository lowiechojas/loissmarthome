import React from 'react'
import TopicItem from '../components/TopicItem'
import TopicScroller from '../components/TopicScroller'
import WebdevTile from '../components/WebdevTile'
import Proglang from '../components/Proglang'

const Home = () => {
  return (
    <div className='flex flex-col items-center h-screen text-white z-49'>
        <div className='flex flex-col bg-[#1C0966] items-center justify-center w-full sm:h-[10vw]'>
            <h1 className='text-lg sm:text-6xl'>Learn something new today</h1>
        </div>

        <div  className='flex text-black items-center justify-center bg-cover bg-center w-full h-[40vh]
        opacity-60 m-2'
                >
                    <TopicScroller />
        </div>

        <div className='flex flex-col items-center justify-center w-full h-auto bg-black opacity-50 m-2'>
        
          <div className='flex'>
                    <WebdevTile />
          </div>
        
        </div>

        <div className='flex flex-col items-center justify-center w-full h-auto bg-amber opacity-50 m-2'>

          <div className='flex'>
                    <Proglang />
          </div>
        
        </div>

        <div className='flex flex-col items-center justify-center w-full h-auto bg-amber opacity-50 m-2'>
        
          <div className='flex text-black'>
                    <h1>eCommerce</h1>
          </div>
        
        </div>

    </div>
  )
}

export default Home