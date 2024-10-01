import React from 'react'
import './forecast.css';

export const Forecast = ({city}) => {
    //const urls = `https://api.openweathermap.org/data/2.5/forecast?q=tirunelveli&appid=574fc30154820aebf9db01cd4a1bfa93&units=Metric`
    const api_key = "574fc30154820aebf9db01cd4a1bfa93";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=Metric`

  return (
    <div className='forecast'>

    </div>
  )
}
