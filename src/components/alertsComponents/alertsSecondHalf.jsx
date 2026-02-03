import React, { useTransition } from 'react'
import AlertsTaker from './alertsTaker'
import { useTranslation } from 'react-i18next'

function alertsSecondHalf({weather,city}) {
  const {t}  = useTranslation()

  return (
    <div className='flex flex-col justify-start px-6 lg:pt-28 lg:w-1/2 '>
      <div>
        <h1 className='text-4xl sm:text-5xl lg:text-4xl xl:text-5xl'>{t('Alerts')}</h1>
        <hr className='mt-3 mb-5 lg:mt-1 lg:mb-3 w-1/2 sm:w-1/4 lg:w-2/4 lg:h-1 h-1.5 xl:mt-3 xl:mb-5 bg-rose-500'/>
      </div>
      <div className="flex flex-col text-lg lg:text-base sm:text-2xl xl:text-lg space-y-4 lg:space-y-2 xl:space-y-4 sm:w-3/4 lg:w-full lg:pr-8">
        <AlertsTaker weather={weather} city={city}/>
      </div>
    </div>
  )
}

export default alertsSecondHalf
