import React, { useEffect } from 'react'
import './forecast.css';
import axios from 'axios';
import { getDialogTitleUtilityClass } from '@mui/material';

export const Forecast = ({city}) => {
    //const urls = `https://api.openweathermap.org/data/2.5/forecast?q=chennai&appid=574fc30154820aebf9db01cd4a1bfa93&units=Metric`
    const api_key = "574fc30154820aebf9db01cd4a1bfa93";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=Metric`;

    useEffect(()=>{
      const getData = async () => {
        const resp = await axios.get(url);
        console.log(resp.data.list[0]);
      }

      getData();
    }, [url]);

  return (
    <div className='forecast'>

    </div>
  )
}
