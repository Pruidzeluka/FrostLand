import React, { useState,useEffect } from 'react';
import FirstHalf from '../components/homeComponents/homeFirstHalf';
import SecondHalf from '../components/homeComponents/homeSecondhalf';

function Weather() {
  const [city, setCity] = useState("")
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)
  const [weather, setWeather] = useState(null)
  const [weatherTwo, setWeatherTwo] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loadingLocation, setLoadingLocation] = useState(true); 


  const API_KEY = "e7688e77154867fa28c9e579175e1974";
  const API_KEY_TWO = "fcd1b0b93e6b4f26bb8135026241411";


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



  const forecastTaker = async () => {
    if (!lat || !lon) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      
      if (data.cod !== "200") {
        console.error("Forecast error:", data.message);
        return;
      }
      let WeatherList = data.list.filter((_, index)=> index%8=== 0)
      setForecast(WeatherList);
      console.log(forecast)
    } catch (err) {
      console.error("Error fetching forecast:", err);
    }
  };


  useEffect(() => {
    if (lat && lon) {
      forecastTaker();
    }
  }, [lat, lon]);

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

  const getWeatherTipeByCoords = async () => {
    if (!lat || !lon) return;

    try {
      const res_two = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY_TWO}&q=${lat},${lon}&aqi=no`
      );
      const data_two = await res_two.json();

      if (data_two.error) {
        console.warn("WeatherAPI error:", data_two.error);
        return;
      }

      setWeatherTwo(data_two);
    } catch (err) {
      console.error("Error fetching weather type by coords:", err);
    }
  };

  useEffect(() => {
    if (lat && lon && !loadingLocation) {
      getWeatherByCoords();
      getWeatherTipeByCoords();
      forecastTaker();
    }
  }, [lat, lon, loadingLocation]);

  const getWeather = async () => {
    if (!city.trim()) {
      alert("Enter city");
      return;
    }

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod === "404" || data.cod === 404) {
        alert("City not found — enter correctly");
        return;
      }

      setWeather(data);
      setLat(data.coord.lat);
      setLon(data.coord.lon);

      getWeatherTipeByCoords();
      forecastTaker();

    } catch (err) {
      console.error(err);
      alert("Error fetching weather — try again");
    }
  };

  const getWeatherTipe = async () => {
    if (!city.trim()) {
      alert("Enter city to get extended data");
      return;
    }

    try {
      const res_two = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY_TWO}&q=${encodeURIComponent(city)}&aqi=no`
      );
      const data_two = await res_two.json();

      if (data_two.error) {
        console.warn("WeatherAPI error:", data_two.error);
        return;
      }

      setWeatherTwo(data_two);
    } catch (err) {
      console.error(err);
      alert("Error fetching weather");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <FirstHalf
        city={city}
        setCity={setCity}
        getWeather={getWeather}
        weather={weather}
        forecastTaker = {forecastTaker}
        getWeatherTipe={getWeatherTipe}

        weatherTwo={weatherTwo}
      />
      <SecondHalf
        weather={weather}
        weatherTwo={weatherTwo}
        setLat={setLat}
        setLon={setLon}
        forecast = {forecast}
      />
    </div>
  );
}

export default Weather;
