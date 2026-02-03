import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import Weather from '../../pages/weather';

function locationBlock({weather,weatherTwo}) {

  const {t, i18n} = useTranslation()

  const isGeorgian = i18n.language.startsWith('ka');


  if (!weather ){
    return (
      <div className='flex w-56 sm:w-60 align-middle items-center justify-start pl-3 sm:pl-4 bg-black rounded-lg py-1  bg-opacity-30 text-white'>
        <div>
          <FaLocationDot className='text-2xl sm:text-3xl mr-2'/>
        </div>
        <div>
          <p className={`${isGeorgian ? 'text-xs' : 'text-sm sm:text-base'}`}>{t('current location')}</p>
          <p className='text-base sm:text-lg'>Alpana, Tsageri</p>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className='flex w-56 sm:w-60 align-middle items-center justify-start pl-3 sm:pl-4 bg-black rounded-lg py-1  bg-opacity-30 text-white'>
        <div>
          <FaLocationDot className='text-2xl sm:text-3xl mr-2'/>
        </div>
        <div>
          <p className={`${isGeorgian ? 'text-xs' : 'text-sm sm:text-base'}`}>{t('current location')}</p>
          <p className='text-base sm:text-lg'>{weather.name}, {weather.sys.country}</p>
        </div>
      </div>
    )
  }
}

export default locationBlock
