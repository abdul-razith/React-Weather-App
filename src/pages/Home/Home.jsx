import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './home.css'
import { Navbar } from '../../components/Navbar/Navbar'
import { Current } from '../../components/Current/Current'
import { Highlights } from '../../components/Highlights/Highlights'
import { Dayforecast } from '../../components/Dayforecast/Dayforecast'
import { Hourforecast } from '../../components/Hourforecast/Hourforecast';
import { Loader } from '../../components/Loader/Loader';
import { Footer } from '../../components/Footer/Footer';
import { Error } from '../../components/Error/Error';
import { useNavigate } from 'react-router';

export const Home = () => {
  
  var url, forecast_url, air_url;

  const [errorSts, setErrorSts] = useState(null);
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [city, setCity] = useState("chennai");
  const [currentCoord, setCurrentCoord] = useState({ lat : 0, lon : 0}); // Get the current coord from the API, after clicking the "current location button" (current weather)

  const [currentData, setCurrentData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [airData, setAirData] = useState(null);

  const [coord, setCoord] = useState({ lat: 0, lon: 0 }) // Get the coord from the fetched url API (current air)

  const api_key = "574fc30154820aebf9db01cd4a1bfa93";

  if(isBtnClicked){
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${currentCoord.lat}&lon=${currentCoord.lon}&appid=${api_key}&units=Metric`;
    /* forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${currentData.name}&appid=${api_key}&units=Metric`; */
    forecast_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${currentCoord.lat}&lon=${currentCoord.lon}&appid=${api_key}&units=Metric`;
    air_url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${currentCoord.lat}&lon=${currentCoord.lon}&appid=${api_key}`;
  }
  else{
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=Metric`;
    forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=Metric`;
    air_url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=${api_key}`;
  }


  // For current data.
  useEffect(() => {
    // Function to fetch all APIs
    const fetchData = async () => {
      try {
        // First function for current API
        const current_resp = await axios.get(url);
        setCurrentData(current_resp.data);
        setCoord({
          lat: current_resp.data.coord.lat,
          lon: current_resp.data.coord.lon,
        });

        // Second function for forecast API
        const forecast_resp = await axios.get(forecast_url);
        setForecastData(forecast_resp.data);

        // Third function for air quality API
        const air_resp = await axios.get(air_url);
        setAirData(air_resp.data);

        // Once all APIs are fetched, turn off the loading state
        setIsLoading(false);
      } catch (error) {
        setErrorSts(error.message)
        console.error("Error fetching data:", error);
        // Handle errors and optionally set loading to false
      }
    };

    fetchData();
  }, [url, forecast_url, air_url]);

  if(errorSts){
    return <Error errorSts={errorSts}/>
  }

  if (isLoading) {
    return <Loader />
  }


  const highlightsProps = {
    sunrise: currentData.sys.sunrise,
    sunset: currentData.sys.sunset,
    humidity: currentData.main.humidity,
    pressure: currentData.main.pressure,
    visibility: currentData.visibility,
    feels_like: currentData.main.feels_like
  }

  return (
    <>
      <Navbar setCity={setCity} setIsBtnClicked={setIsBtnClicked} setCurrentCoord={setCurrentCoord} />
      <div className="container">
        <aside>
          <>
            <Current currentData={currentData} />
          </>

          <>
            <Dayforecast forecastData={forecastData} />
          </>
        </aside>
        <main>
          <Highlights airData={airData} highlightsProps={highlightsProps} />
          <Hourforecast forecastData={forecastData} />
        </main>
      </div>
      <Footer />
    </>
  )
}
