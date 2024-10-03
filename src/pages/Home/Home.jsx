import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './home.css'
import { Navbar } from '../../components/Navbar/Navbar'
import { Current } from '../../components/Current/Current'
import { Highlights } from '../../components/Highlights/Highlights'
import { Dayforecast } from '../../components/Dayforecast/Dayforecast'
import { Hourforecast } from '../../components/Hourforecast/Hourforecast';

export const Home = () => {
  const [city, setCity] = useState("chennai");
  const [currentData, setCurrentData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [coord, setCoord] = useState({lat:0, lon:0})

  // Current weather API url.
  const api_key = "574fc30154820aebf9db01cd4a1bfa93";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=Metric`;

  // Forecast waether API url.
  //const urls = `https://api.openweathermap.org/data/2.5/forecast?q=chennai&appid=574fc30154820aebf9db01cd4a1bfa93&units=Metric`
  const forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=Metric`;
  
  // For current data.
  useEffect(() => {
    // First function for current api
    const getData1 = async () => {
      const current_resp = await axios.get(url);
      setCurrentData(current_resp.data);
      setCoord({
        lat : current_resp.data.coord.lat,
        lon : current_resp.data.coord.lon,
      });
    }

    // Second function for forecast api
    const getData2 = async () => {
      const forecast_resp = await axios.get(forecast_url);
      setForecastData(forecast_resp.data);
    }
    getData1();
    getData2();
  }, [url, forecast_url]);

  if (!currentData || !forecastData) {
    return (
      <div className='current'>
        Search the city
      </div>
    )
  }

  const highlightsProps = {
    sunrise : currentData.sys.sunrise,
    sunset : currentData.sys.sunset,
    humidity : currentData.main.humidity,
    pressure : currentData.main.pressure,
    visibility : currentData.visibility,
    feels_like : currentData.main.feels_like
  }

  return (
    <>
      <Navbar setCity={setCity}/>
      <div className="container">
        <aside>
          <>
            {/* <Current city={city} setCoord={setCoord} /> */}
            <Current currentData={currentData} />
          </>

          <>
            <Dayforecast forecastData={forecastData}/>
          </>
        </aside>
        <main>
          <Highlights coord={coord} highlightsProps={highlightsProps}/>
          <Hourforecast forecastData={forecastData} />
        </main>
      </div>
    </>
  )
}
