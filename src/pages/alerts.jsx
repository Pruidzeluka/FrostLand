import React from 'react'
import { useState,useEffect } from 'react'
  
import AlertsFirstHalf from '../components/alertsComponents/alertsFirstHalf'
import AlertsSecondHalf from '../components/alertsComponents/alertsSecondHalf'
import { useTranslation } from 'react-i18next'


function alerts() {
  const [weather, setWeather] = useState(null)
  const [weatherTwo, setWeatherTwo] = useState(null)
  const [lon, setLon] = useState(null)
  const [lat, setLat] = useState(null)
  const [loadingLocation, setLoadingLocation] = useState(true)

  const {t, i18n} = useTranslation()
  const isGeorgian = i18n.language === "ka"


  const [city, setCity] = useState("")


  const API_KEY = "e7688e77154867fa28c9e579175e1974";

    useEffect(() => {
      const getUserLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setLat(latitude);
              setLon(longitude);
              setLoadingLocation(false);
              console.log("ლოკაცია მიღებულია:", latitude, longitude);
            },
            (error) => {
              console.warn("ლოკაციის წვდომა უარყოფილია:", error.message);

              setLat(41.7151);
              setLon(44.8271);
              setLoadingLocation(false);
            }
          );
        } else {
          console.warn("Geolocation არ არის მხარდაჭერილი");

          setLat(41.7151);
          setLon(44.8271);
          setLoadingLocation(false);
        }
      };
  
      getUserLocation();
  }, []);

  const getWeather = async() =>{
    try{
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      )
      const Data = await res.json()

      if (Data.cod !== "200" && Data.cod !== 200) {
        alert(t('City not found — enter correctly'));
        setWeather(null); 
        return;
      }

      setWeather(Data)
    }
    catch(err){
      console.log(err)
      alert(t('Error fetching weather — try again'));      
    }
  }

  const getWeatherByCoords = async () => {
    if (!lat || !lon) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        console.error("Weather error:", data.message);
        return;
      }

      setWeather(data);
    } catch (err) {
      console.error("Error fetching weather by coords:", err);
    }
  };

  useEffect(() => {
    if (lat && lon && !loadingLocation) {
      getWeatherByCoords();

    }
  }, [lat, lon, loadingLocation]);



  return (
    <div className='flex flex-col lg:flex-row-reverse lg:gap-4 justify-between'>
      
      <AlertsFirstHalf setCity={setCity} getWeather={getWeather} weather={weather} weatherTwo={weatherTwo}/>
      <AlertsSecondHalf weather={weather} city={city} weatherTwo={weatherTwo}/>

    </div>
  )
}

export default alerts
