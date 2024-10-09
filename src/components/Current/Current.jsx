import React from "react";
import "./current.css";
import { weather_icons } from "../../data/images";

export const Current = ({ currentData }) => {
  
  // Function to get the current time based on the city's timezone offset
  function getCurrentLocalTime(offset) {
    const now = new Date(); // Get current system time
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000; // Convert to UTC
    const localTime = new Date(utcTime + offset * 1000); // Adjust for the city's timezone offset

    // Format the date
    const optionsDate = {
      weekday: "long",
      month: "long",
      day: "numeric",
      //year: 'numeric'
    };
    const formattedDate = localTime.toLocaleDateString([], optionsDate);

    // Format the time
    const optionsTime = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const formattedTime = localTime.toLocaleTimeString([], optionsTime);

    return { formattedDate, formattedTime };
  }

  // Get the timezone from the API response
  const timezone = currentData.timezone;

  // Get the current date and time based on the city's timezone
  const { formattedDate, formattedTime } = getCurrentLocalTime(timezone);

  return (
    <div className="current">
      <div className="current-title">
        <h3>Now</h3>
        <p>{formattedTime}</p>
      </div>
      <div className="unit">
        <div className="temp">
          <h1>{parseFloat(currentData.main.temp).toFixed(1)}</h1>
          <p>°C</p>
        </div>
        <img
          className="weather-icon"
          src={weather_icons[currentData.weather[0].icon]}
          alt="weather-icon"
        />
      </div>
      <h4>{currentData.weather[0].main}</h4>
      <hr />
      <div className="date-location">
        <div className="date">
          <p>{formattedDate}</p> {/* Show formatted date and time */}
        </div>
        <div className="location">
          <p>
            {currentData.name}, {currentData.sys.country}
          </p>
        </div>
      </div>
    </div>
  );
};
