import React, { useTransition } from 'react'
import { CiCloud } from "react-icons/ci";
import IconSelector from '../iconSelector';
import { useTranslation } from 'react-i18next';


function alertsWeatherBlock({weather}) {

  const {t} = useTranslation()

  const windSpeed = weather?.wind?.speed ? (weather.wind.speed * 3.6).toFixed(1) : "N/A"

  const getLocalTime = () => {
    if (!weather?.timezone) return "--:--";

    const localTime = new Date(Date.now() + weather.timezone * 1000);

    let hours = localTime.getHours();
    const minutes = localTime.getMinutes();

    return `${hours-4}:${minutes}`;
  };

  if(!weather){
    return (
      <div className='flex flex-col shadow-[0_2px_6px_rgba(0,0.25,0.25,0.25)] rounded-lg sm:h-72 lg:h-56 xl:h-72'>
        <div className='flex flex-row justify-between text-sm sm:text-lg py-2 sm:py-3 px-2 lg:text-sm lg:py-2 '>
          <p>{t('CURRENT WEATHER')}</p>
          <p>22:00{t('AM')}</p>
        </div>
        <hr className='border-black '/>
        <div className='flex flex-row py-6 px-2 h-full justify-center items-center text-center'>
          <div className='flex w-1/2'>
              <div>
                  <CiCloud className='text-5xl sm:text-8xl lg:text-7xl xl:text-8xl'/>
              </div>
              <div className='flex flex-col'>
                  <h2 className='text-5xl sm:text-8xl lg:text-7xl xl:text-8xl'>10°</h2>
                  <p className='text-sm sm:text-xl'>{t('RealFeel')} 7°</p>
              </div>
          </div>
          <div className='flex flex-col w-1/2 text-xs sm:text-2xl lg:text-lg xl:text-xl gap-1 sm:gap-2 lg:gap-1 xl:gap-2 tracking-wide lg:tracking-normal xl:tracking-wide'>
              <div className='flex justify-between'>
                  <p>{t('Wind')}</p>
                  <p>19{t('km/h')}</p>
              </div>
              <hr className='border-black '/>
              <div className='flex justify-between'>
                  <p>{t('Air Quality')}</p>
                  <p>{t('Fair')}</p>
              </div>
              <hr className='border-black '/>           
              <div className='flex justify-between'>
                  <p>{t('Type')}</p>
                  <p>{t('Cloudy')}</p>
              </div>
          </div>
        </div>
      </div>
    )
  }else{

    let text = weather.weather[0].main.toLowerCase()
    let weatherTipe = ""

    if (text.includes("rain") || text.includes("overcast") || text.includes("drizzle")) weatherTipe = "Rain";
    else if (text.includes("snow")) weatherTipe = "Snow";
    else if (text.includes("cloud")) weatherTipe = "Clouds";
    else if (text.includes("sun") || text.includes("clear")) weatherTipe = "Sunny";
    else if (text.includes("mist")) weatherTipe = "Mist";
    else weatherTipe = dayData.weather[0].main;

    return (
      <div className='flex flex-col shadow-[0_2px_6px_rgba(0,0.25,0.25,0.25)] rounded-lg sm:h-72 lg:h-56 xl:h-72'>
        <div className='flex flex-row justify-between text-sm sm:text-lg py-2 sm:py-3 px-2 lg:text-sm lg:py-2 '>
          <p>{t('CURRENT WEATHER')}</p>
          <p>{getLocalTime() }</p>
        </div>
        <hr className='border-black '/>
        <div className='flex flex-row py-6 px-2 h-full justify-center items-center text-center'>
          <div className='flex w-1/2'>
              <div className='text-5xl sm:text-8xl lg:text-7xl xl:text-8xl'>

                  <IconSelector weatherTipe={weatherTipe}/>
              </div>
              <div className='flex flex-col'>
                  <h2 className='text-5xl sm:text-8xl lg:text-7xl xl:text-8xl'>{Math.round(weather.main.temp)}°</h2>
                  <p className='text-sm sm:text-xl'>{t('RealFeel')} {Math.round(weather.main.feels_like)}°</p>
              </div>
          </div>
          <div className='flex flex-col w-1/2 text-xs sm:text-2xl lg:text-lg xl:text-xl gap-1 sm:gap-2 lg:gap-1 xl:gap-2 tracking-wide lg:tracking-normal xl:tracking-wide'>
              <div className='flex justify-between'>
                  <p>{t('Wind')}</p>
                  <p>{windSpeed}{t('km/h')}</p>
              </div>
              <hr className='border-black '/>
              <div className='flex justify-between'>
                  <p>{t('Air Quality')}</p>
                  <p>{t('Fair')}</p>
              </div>
              <hr className='border-black '/>           
              <div className='flex justify-between'>
                  <p>{t('Type')}</p>
                  <p>{t(weather.weather[0].main)}</p>
              </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default alertsWeatherBlock
