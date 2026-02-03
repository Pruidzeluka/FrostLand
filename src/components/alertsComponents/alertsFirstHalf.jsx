import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import AlertsWeatherBlock from './alertsWeatherBlock';
import AlertsLocationBlock from './alertsLocationBlock';
import { useTranslation } from 'react-i18next';

function alertsFirstHalf({setCity, getWeather, weather, weatherTwo}) {

  const {t} = useTranslation()

  return (
    <div className='flex flex-col pt-28 px-6 xl:pl-28 pb-16 lg:w-1/2  '>
      <div className="flex justify-end w-full ">
        <input
          type="text"
          placeholder={t("Enter location")}
          spellCheck="false"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              getWeather();
            }
          }}
          className="px-4 py-2 sm:px-5 sm:py-3 w-2/3 sm:w-1/2 lg:w-2/3 h-full sm:text-xl lg:text-lg lg:py-2 max-w-xl rounded-l border border-gray-300 focus:outline-none"
          onChange={(e)=>setCity(e.target.value)}
        />
        <button
          className="bg-white px-4 py-2 sm:px-5 sm:py-3 rounded-r border border-gray-300  hover:bg-gray-100"
          onClick={getWeather}
        >
        <IoMdSearch className="text-gray-600 text-xl sm:text-2xl lg:text-xl" />
        </button>
      </div>

      <div className='mt-14 w-10/12 lg:w-full'>
        <AlertsWeatherBlock weather={weather} weatherTwo = {weatherTwo}/>
      </div>
      <div className='flex w-full justify-end mt-5 xl:mt-10'>
        <AlertsLocationBlock weather={weather} weatherTwo = {weatherTwo}/>
      </div>
    </div>
    
  )
}

export default alertsFirstHalf
