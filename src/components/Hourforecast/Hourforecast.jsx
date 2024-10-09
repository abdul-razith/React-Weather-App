import React from 'react';
import './hourforecast.css';
import { weather_icons } from '../../data/images';

export const Hourforecast = ({ forecastData }) => {
  const forecast_list = forecastData.list.slice(0, 8); // First 8 hours of forecast

  // Function to get the local time based on timezone offset
  function getLocalTime(unixTime, offset) {
    const date = new Date(unixTime * 1000); // Convert Unix time to milliseconds
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60000; // Convert to UTC
    const localTime = new Date(utcTime + offset * 1000); // Adjust for the city's timezone offset

    // Format the time
    const formattedTime = localTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    return formattedTime.toUpperCase(); // Return time in 12-hour format with AM/PM
  }

  // Get the timezone offset from the API response
  const timezoneOffset = forecastData.city.timezone;

  return (
    <div className='hourforecast'>
      <div className="hourforecast-title">
        <h3>Next 24 Hours Forecast</h3>
      </div>
      <div className="boxes">
        {
          forecast_list.map((ele, index) => {
            // Calculate the local time for each forecast entry
            const time = getLocalTime(ele.dt, timezoneOffset);

            return (
              <div className='box' key={index}>
                <h5>{time}</h5>
                <img src={weather_icons[ele.weather[0].icon]} alt="" width={100} height={100} />
                <p>{ele.weather[0].main}</p>
                <p>{parseFloat(ele.main.temp).toFixed(1)}°C</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};
