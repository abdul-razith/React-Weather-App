import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './home.css'
import { Navbar } from '../../components/Navbar/Navbar'
import { Current } from '../../components/Current/Current'
import { Forecast } from '../../components/Forecast/Forecast'
import { Highlights } from '../../components/Highlights/Highlights'
import { Hourforecast } from '../../components/Hourforecast/Hourforecast'

export const Home = () => {
  const [city, setCity] = useState("chennai");
  const [currentData, setCurrentData] = useState(null);
  const [coord, setCoord] = useState({lat:0, lon:0})

  const api_key = "574fc30154820aebf9db01cd4a1bfa93";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=Metric`;
  
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(url);
      setCurrentData(resp.data);
      setCoord({
        lat : resp.data.coord.lat,
        lon : resp.data.coord.lon,
      });
    }
    getData();
  }, [url]);

  if (!currentData) {
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
            <Forecast city={city}/>
          </>
        </aside>
        <main>
          <Highlights coord={coord} highlightsProps={highlightsProps}/>
          <Hourforecast />
        </main>
      </div>
    </>
  )
}
