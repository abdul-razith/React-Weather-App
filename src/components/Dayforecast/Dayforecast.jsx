import React, { useEffect } from 'react'
import './dayforecast.css';
import { GiConsoleController } from 'react-icons/gi';
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

  forecast_list.map((ele, index) => {
    const timestamp = new Date(ele.dt * 1000);
    const time = timestamp.toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata", hour: '2-digit', minute: '2-digit', hour12: true
    }).toUpperCase();
    //console.log(time.split(','));
    let x = time.split(',');

    if (x[0] != today_full_date) {
      date_collect.push(x);
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
      <div className="row">
        <div className="icon">
          <img src={weather_icons['10n']} alt="" width={54} height={54}/>
          <p>10 °C</p>
        </div>
        <div className="date">
          <p>2 Mar</p>
        </div>
        <div className="week">
          <p>Friday</p>
        </div>
      </div>
      <div className="row">
        <div className="icon">
          <img src={weather_icons['04d']} alt="" width={54} height={54}/>
          <p>10 °C</p>
        </div>
        <div className="date">
          <p>2 Mar</p>
        </div>
        <div className="week">
          <p>Friday</p>
        </div>
      </div>
      <div className="row">
        <div className="icon">
          <img src={weather_icons['09d']} alt="" width={54} height={54}/>
          <p>10 °C</p>
        </div>
        <div className="date">
          <p>2 Mar</p>
        </div>
        <div className="week">
          <p>Friday</p>
        </div>
      </div>
      <div className="row">
        <div className="icon">
          <img src={weather_icons['13d']} alt="" width={54} height={54}/>
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
