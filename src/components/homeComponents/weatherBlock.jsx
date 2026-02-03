import React from 'react';
import { useState,useEffect } from 'react';
import IconSelector from '../iconSelector';
import { useTranslation } from 'react-i18next';

function WeatherBlock({ weather, weatherTwo,forecast }) {

  const {t, i18n} = useTranslation()

  const isGeorgian = i18n.language === "ka"

  // useEffect(()=>{
  //   console.log(weather)
  //   console.log(weatherTwo)
  //   console.log(forecast)
  // },[weather])
  
  if (!weather || !weatherTwo){
    return(
      <div className="flex w-full py-11 px-4 rounded-lg bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] items-start gap-6 lg:justify-center lg:py-14">
        <div className="flex flex-col gap-1.5 "> 
          <h1 className="text-5xl lg:text-6xl">16°</h1> 
          <h2 className="text-3xl xl:text-4xl">{t('Sunny')}</h2>
          <p className="text-sm lg:text-base tracking-wide">
            {t('Monday, august 28')}
          </p> 
        </div> 

        <div className="w-px bg-slate-300 self-stretch"></div>

        <div className="text-xs flex flex-col gap-1 lg:gap-1.5 xl:text-base"> 
          <p>{t('RealFeel')}: 14°</p> 
          <p>{t('Humidity')}: 72%</p> 
          <p>{t('Cloud Cover')}: 45%</p> 
          <p>{t('Visibility')}: 5{t('km')}</p> 
          <p>{t('Wind')}: 11{t('km/h')}</p>
          <p>{t('Preassure')}: 999{t('hPa')}</p> 
        </div> 
      </div>
    );
  } 

  const monthNames = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
  ];
  const weekDays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  const weekDay = weekDays[new Date().getDay()];
  const month = monthNames[new Date().getMonth()];
  const dayNumber = new Date().getDate();

  const text = weatherTwo.current.condition.text.toLowerCase();
  let weatherTipe = "";

  if (text.includes("rain") || text.includes("overcast") || text.includes("drizzle")) weatherTipe = "Rain";
  else if (text.includes("snow")) weatherTipe = "Snow";
  else if (text.includes("cloud")) weatherTipe = "Clouds";
  else if (text.includes("sun") || text.includes("clear")) weatherTipe = "Sunny";
  else if (text.includes("mist")) weatherTipe = "Mist";
  else weatherTipe = weatherTwo.current.condition.text;

  return (
    <div className="flex w-full py-11 px-4 rounded-lg bg-white shadow-lg items-start gap-6 justify-center lg:py-14">
      <div className="flex flex-col gap-1.5">
        <h1 className="text-5xl lg:text-6xl">{Math.round(weather.main.temp)}°</h1>
        <div className='flex justify-between text-4xl gap-2'>
          <h2 className={`${isGeorgian?'text-3xl':'text-3xl'} xl:text-4xl mt-2`}>{t(weatherTipe)}</h2>
          <div className='mt-1'>
            <IconSelector weatherTipe={weatherTipe} />
          </div>
        </div>
        <p className="text-sm lg:text-base tracking-wide">{t(weekDay)}, {dayNumber} {t(month)}</p>
      </div>

      <div className="w-px bg-slate-300 self-stretch"></div>

      <div className="text-xs flex flex-col gap-1 lg:gap-1.5 xl:text-base">
        <p>{t('RealFeel')}: {weather.main.feels_like}°</p>
        <p>{t('Humidity')}: {weather.main.humidity}%</p>
        <p>{t('Cloud Cover')}: {weather.clouds.all}%</p>
        <p>{t('Visibility')}: {weather.visibility / 1000} {t('km')}</p>
        <p>{t('Wind')}: {weather.wind.speed} {t('m/s')}</p>
        <p>{t('Preassure')}: {weather.main.pressure} {t('hPa')}</p>
      </div>
    </div>
  );
}

export default WeatherBlock;
