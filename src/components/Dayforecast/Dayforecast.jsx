import React, { useEffect } from 'react'
import './dayforecast.css';
import { weather_icons } from '../../data/images';

export const Dayforecast = ({ forecastData }) => {

  const forecast_list = forecastData.list;

  const date_collect = [];
  const final_collect = [];

  const date = new Date();
  const current_date = date.getDate();
  const current_month = date.getMonth() + 1;
  const current_year = date.getFullYear();
  const today_full_date = `${current_date}/${current_month}/${current_year}`;

  // Convert unix to IST formate -> '1/10/2024, 01:30 PM' (str formate)
  const istFormate = (dt) => {
    const timestamp = new Date(dt * 1000);
    const time = timestamp.toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata", hour: '2-digit', minute: '2-digit', hour12: true
    }).toUpperCase();

    return time;
  }

  // To get tomorrow date
  const tomorrowDate = (x) => {
    // Fri Oct 04 2024 10:29:48 GMT+0530 (India Standard Time)
    x.setDate(x.getDate() + 1);
    return x
  }

  forecast_list.map((ele, index) => {
    const time = istFormate(ele.dt);
    let x = time.split(',');

    if (x[0] != today_full_date) {
      date_collect.push(ele);
    }
  })


  // -------------

  for (let i = 0; i < 5; i++) {
    let found = false;
    //11:30 AM || 02:30 PM || last_index_value
    let tomorrow_date_obj = tomorrowDate(date);
    let tomorrow_date = `${tomorrow_date_obj.getDate()}/${tomorrow_date_obj.getMonth() + 1}/${tomorrow_date_obj.getFullYear()}`

    for (let j = 0; j < date_collect.length; j++) {

      let x = istFormate(date_collect[j].dt)

      if (tomorrow_date + ", 11:30 AM" === x || tomorrow_date + ", 03:30 PM" === x) {
        let objs = {
          icon : date_collect[j].weather[0].icon,
          temp : date_collect[j].main.temp,
          date : tomorrow_date_obj.getDate(),
          month : tomorrow_date_obj.toLocaleString('en-US', { month: 'short' }),
          week : tomorrow_date_obj.toLocaleString('en-US', { weekday: 'long' }),
        }
        final_collect.push(objs)
        found = true
        console.log(date_collect[j]) // For testing
        
        break
      }
    }
    if (!found) {
      let objs = {
        icon : date_collect[date_collect.length - 1].weather[0].icon,
        temp : date_collect[date_collect.length - 1].main.temp,
        date : tomorrow_date_obj.getDate(),
        month : tomorrow_date_obj.toLocaleString('en-US', { month: 'short' }),
        week : tomorrow_date_obj.toLocaleString('en-US', { weekday: 'long' }),
      }
      final_collect.push(objs)
      console.log(date_collect[date_collect.length - 1]) // For testing
    }
  }

  return (
    <div className='dayforecast'>
      <h3 className='title'>5 Day Forecast</h3>
      {
        final_collect.map((ele, index) => {
          return (
            <div className="row" key={index}>
              <div className="icon">
                <img src={weather_icons[ele.icon]} alt="" width={54} height={54} />
                <p>{parseFloat(ele.temp).toFixed(1)} °C</p>
              </div>
              <div className="date">
                <p>{ele.date} {ele.month}</p>
              </div>
              <div className="week">
                <p>{ele.week}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
