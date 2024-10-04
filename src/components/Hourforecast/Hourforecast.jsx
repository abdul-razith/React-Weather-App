import React from 'react'
import './hourforecast.css'
import { weather_icons } from '../../data/images';

export const Hourforecast = ({ forecastData }) => {
  const forecast_list = forecastData.list.slice(0, 8);

  return (
    <>
      <div className='hourforecast'>
        <div className="hourforecast-title">
          <h3>Next 24 Hours Forecast</h3>
        </div>
        <div className="boxes">
          {
            forecast_list.map((ele, index) => {

              // Formate time
              // Convert Unix timestamps to milliseconds
              const timestamp = new Date(ele.dt * 1000);
          
              const time = timestamp.toLocaleTimeString("en-IN", {
                timeZone: "Asia/Kolkata", hour: '2-digit', minute: '2-digit', hour12: true
              }).toUpperCase();
              
              return (
                <div className='box' key={index}>
                  <h5>{time}</h5>
                  <img src={weather_icons[ele.weather[0].icon]} alt="" width={74} height={74}/>
                  <p>{ele.weather[0].main}</p>
                  <p>{parseFloat(ele.main.temp).toFixed(1)}°C</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
