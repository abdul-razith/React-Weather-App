import React from 'react'
import './error.css'
import { weather_icons } from '../../data/images'

export const Error = ({errorSts}) => {
  return (
    <div className='error'>
        <h1>{errorSts}</h1>
        <img src={weather_icons.erro_icon} alt="" />
    </div>
  )
}
