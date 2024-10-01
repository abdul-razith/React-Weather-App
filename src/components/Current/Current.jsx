import React from 'react'
import './current.css'
import { weather_icons } from '../../data/images'

export const Current = ({currentData}) => {
  
  const timestamp = currentData.dt * 1000; // Convert seconds to milliseconds
  const date = new Date(timestamp); // Create a Date object

  // Extract components
  const day = date.getDate(); // Get the day (1-31)
  const monthIndex = date.getMonth(); // Get the month (0-11)
  const year = date.getFullYear(); // Get the year (e.g., 2021)

  // Get day name
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[date.getDay()]; // Get the name of the day

  // Get month name
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthName = months[monthIndex]; // Get the full name of the month

  // Combine components into the desired format
  const formattedDate = `${dayName}, ${day} ${monthName}`;

  return (
    <div className='current'>
      <h3>Now</h3>
      <div className='unit'>
        <div className="temp">
          <h1>{parseFloat(currentData.main.temp).toFixed(1)}</h1>
          <p>°C</p>
        </div>
        <img className='weather-icon' src={weather_icons[currentData.weather[0].icon]} alt="weather-icon" />
      </div>
      <h4>{currentData.weather[0].main}</h4>
      <hr />
      <div className="date-location">
        <div className="date">
          <p>{formattedDate}</p>
        </div>
        <div className="location">
          <p>{currentData.name}, {currentData.sys.country}</p>
        </div>
      </div>
    </div>
  )
}
