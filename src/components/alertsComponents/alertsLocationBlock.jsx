import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { useTranslation } from 'react-i18next';

function alertsLocationBlock({weather}) {

  const {t} = useTranslation()

  if(!weather){
    return (

      <div className='flex w-56 sm:w-1/2 lg:w-3/5  sm:h-24 lg:h-20 align-middle items-center justify-start bg-white rounded-lg py-1 shadow-[0_2px_6px_rgba(0,0.25,0.25,0.25)] border-2 text-black'>
          <div className='px-4'>
              <CiLocationOn className='text-3xl sm:text-5xl lg:text-4xl '/>
          </div>
          <div>
              <p className='text-sm sm:text-xl lg:text-base xl:text-lg'>{t('current location')}</p>
              <p className='text-base sm:text-2xl lg:text-xl xl:text-2xl'>Alpana, Tsageri</p>
          </div>
      </div>
    )
  }else{
    return (

      <div className='flex w-56 sm:w-1/2 lg:w-3/5  sm:h-24 lg:h-20 align-middle items-center justify-start bg-white rounded-lg py-1 shadow-[0_2px_6px_rgba(0,0.25,0.25,0.25)] border-2 text-black'>
          <div className='px-4'>
              <CiLocationOn className='text-3xl sm:text-5xl lg:text-4xl '/>
          </div>
          <div>
              <p className='text-sm sm:text-xl lg:text-base xl:text-lg'>{t('current location')}</p>
              <p className='text-base sm:text-2xl lg:text-xl xl:text-2xl'>{weather.name}, {weather.sys.country}</p>
          </div>
      </div>
    )
  }
  
}

export default alertsLocationBlock
