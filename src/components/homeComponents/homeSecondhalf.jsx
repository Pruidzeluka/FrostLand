import React from 'react';
import { useState,useEffect } from 'react';
import WeatherBlock from './weatherBlock';
import WeatherBlocktwo from './weatherBlocktwo';
import WeatherBlockthree from './weatherBlockthree';
import { useTranslation } from 'react-i18next';

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

function HomeSecondhalf({ weather, weatherTwo, setLat, setLon, forecast }) {
  
  const {t} = useTranslation()

  const [queue,setQueue] = useState(0)

  const counter = (info) =>{

    if(queue === 4 && info == "plus"){
      setQueue(4)
    }else if(queue === 0 && info == "minus"){
      setQueue(0)
    }else{
      if (info === "plus"){
      setQueue(queue+1)
      }else if(info === "minus"){
        setQueue(queue-1)
      }
    }

  }


  return (
    <div className="flex flex-col mb-10 sm:flex-row lg:mb-0 sm:justify-between lg:flex-col lg:mt-12 lg:w-5/12 lg:h-[calc(100vh-48px)] xl:px-16 bg-white self-stretch px-6">
      
      <div className='lg:h-3/5'>
        <h1 className='text-4xl my-5 lg:my-1 lg:text-3xl xl:text-4xl xl:my-5'>{t('Today')}</h1>
        <WeatherBlock weather={weather} weatherTwo={weatherTwo} setLat={setLat} forecast={forecast}  setLon={setLon}/>
      </div>

      <div className="text-4xl mt-6 sm:w-5/12 md:w-1/2 lg:w-full lg:h-2/5 sm:mt-5 lg:mt-0">
        <h1 className="text-4xl mb-4 lg:my-1.5 lg:text-3xl xl:text-4xl xl:my-5">{t('Daily')}</h1>

        <div className='flex relative lg:w-full lg:h-3/4 xl:h-2/3'>
          <button className='absolute bg-white rounded-full text-3xl shadow-md p-2 -left-3 top-1/3 lg:top-1/3' onClick={()=>counter("minus")}>
            <IoIosArrowRoundBack/>
          </button>

          <div className='flex gap-3  w-full justify-center lg:h-full'>
            <div className='w-1/2 lg:h-full'>
              <WeatherBlocktwo queue={queue} weather={weather} forecast={forecast} />
            </div>
            <div className='sm:hidden md:block  w-1/2 lg:h-full'>
              <WeatherBlockthree queue={queue} weather={weather} forecast={forecast} />
            </div>
          </div>

          <button className='absolute bg-white rounded-full text-3xl shadow-md p-2 -right-3 top-1/3 lg:top-1/3' onClick={()=>counter("plus")}>
            <IoIosArrowRoundForward/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeSecondhalf;