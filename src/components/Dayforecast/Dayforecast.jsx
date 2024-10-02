import React, { useEffect } from 'react'
import './dayforecast.css';
import { weather_icons } from '../../data/images';

export const Dayforecast = ({ forecastData }) => {

  const forecast_list = forecastData.list;
  //console.log(forecast_list);

  const date_collect = [];

  const date = new Date();
  const current_date = date.getDate();
  const current_month = date.getMonth() + 1;
  const current_year = date.getFullYear();
  const today_full_date = `${current_date}/${current_month}/${current_year}`; 

  // Convert to IST formate -> '1/10/2024, 01:30 PM'
  const istFormate = (dt) => {
    const timestamp = new Date(dt * 1000);
    const time = timestamp.toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata", hour: '2-digit', minute: '2-digit', hour12: true
    }).toUpperCase();

    return time;
  }
  
  forecast_list.map((ele, index) => {
    const time = istFormate(ele.dt);
    let x = time.split(',');

    if (x[0] != today_full_date) {
      date_collect.push(ele);
    }
  })

  console.log(date_collect);

  return (
    <div className='dayforecast'>
      <div className="row">
        <div className="icon">
          <img src={weather_icons['50d']} alt="" width={54} height={54}/>
          <p>10 °C</p>
        </div>
        <div className="date">
          <p>2 Mar</p>
        </div>
        <div className="week">
          <p>Friday</p>
        </div>
      </div>
    </div>
  )
}
