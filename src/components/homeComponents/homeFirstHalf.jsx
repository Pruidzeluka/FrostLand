import React from 'react';
import { IoMdSearch } from "react-icons/io";
import LocationBlock from './locationBlock';
import bgfoto from '../../imgs/bgfoto.jpg';
import { useTranslation } from 'react-i18next';

function HomeFirstHalf({ city, setCity, getWeather, weather, weatherTwo, getWeatherTipe,forecastTaker }) {
  const {t} = useTranslation()

  return (
    <div
      className="relative flex flex-col w-screen lg:w-8/12 px-6 pb-8 rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl lg:h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${bgfoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className='relative'>
        <div className='flex justify-end mb-16 mt-32 lg:mt-4 lg:mr-3'>
          <LocationBlock weather={weather} weatherTwo={weatherTwo} />
        </div>

        <div className='flex flex-col justify-items-center justify-center h-full lg:h-[calc(100vh-200px)] lg:gap-6'>
          <h1 className='text-white text-2xl pr-24 lg:pr-0 xl:text-3xl lg:text-center'>
            {t('The Only Weather App You Need')}
          </h1>

          <div className='w-full hidden lg:flex justify-center items-center h-0.5'>
            <hr className='hidden lg:flex w-1/3 h-full bg-white' />
          </div>

          <div className="flex justify-center my-12 lg:my-0 w-full lg:mt-4">
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              spellCheck="false"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  getWeather();
                  getWeatherTipe();
                  forecastTaker();
                }
              }}
              placeholder={t('Enter location')}
              className="px-4 py-2 w-8/12 lg:w-1/2 max-w-xl rounded-l border border-gray-300 focus:outline-none"
              
            />
            <button
              className="bg-white px-4 py-2 rounded-r border border-gray-300 hover:bg-gray-100"
              onClick={()=>{getWeather(); getWeatherTipe(); forecastTaker()}}
            >
              <IoMdSearch className="text-gray-600 text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFirstHalf;
