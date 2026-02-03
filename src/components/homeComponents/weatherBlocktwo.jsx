import React, { useTransition } from 'react'
import IconSelector from '../iconSelector';
import { useTranslation } from 'react-i18next';

function WeatherBlocktwo({ queue, weather, forecast }) {

  const {t, i18n} = useTranslation()

  const isGeorgian = i18n.language === "ka"

  if (!forecast || forecast.length === 0) {
    return (
      <div className="flex py-8 px-5 rounded-lg bg-white shadow-[0_2px_6px_rgba(0,0,0,0.15)] items-start gap-6 lg:py-6 lg:px-4 lg:pl-3 lg:justify-between lg:gap-0 lg:h-full ">

        <div className="flex flex-col gap-1.5">
          <h1 className="text-5xl mb-2 xl:mb-8">16°</h1>
          <h2 className="text-3xl">{t('Sunny')}</h2>
          <p className="text-sm tracking-wide">{t('Monday, august 28')}</p>
        </div>
      </div>
    );
  }


  const dayData = forecast[queue]; 

  if (!dayData) {
    return <div className="text-gray-400">{t('No data')}</div>;
  }

  const date = new Date(dayData.dt * 1000);
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
  const monthName = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  const monthArray = monthName.split(" ")

  let text = dayData.weather[0].main.toLowerCase()
  let weatherTipeTwo = ""

  if (text.includes("rain") || text.includes("overcast") || text.includes("drizzle")) weatherTipeTwo = "Rain";
  else if (text.includes("snow")) weatherTipeTwo = "Snow";
  else if (text.includes("cloud")) weatherTipeTwo = "Clouds";
  else if (text.includes("sun") || text.includes("clear")) weatherTipeTwo = "Sunny";
  else if (text.includes("mist")) weatherTipeTwo = "Mist";
  else weatherTipeTwo = dayData.weather[0].main;
  

  return (
    <div className="flex py-8 px-5 rounded-lg bg-white shadow-[0_2px_6px_rgba(0,0,0,0.15)] items-start gap-6 lg:py-6 lg:px-4 lg:pl-3 lg:justify-between lg:gap-0 lg:h-full">
      <div className="flex flex-col gap-1.5">
        <h1 className="text-5xl mb-2 xl:mb-8 ">
          {Math.round(dayData.main.temp)}°
        </h1>
        <div className={`flex ${isGeorgian?'gap-1' : 'gap-5'} text-4xl`}>
          <h2 className={`${isGeorgian?"text-2xl" : "text-3xl"} capitalize xl:text-4xl mt-2 lg:mt-1`}>
            {t(weatherTipeTwo)}
          </h2>
          <IconSelector weatherTipe={weatherTipeTwo} />          
        </div>

        <p className="text-xs tracking-wide xl:text-sm">
          {t(dayName)}, {t(monthArray[0])} {monthArray[1]}
        </p>
      </div>
    </div>
  );
}

export default WeatherBlocktwo