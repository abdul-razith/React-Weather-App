import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FiWind, FiSunrise, FiSunset, FiEye } from "react-icons/fi";
import { WiHumidity, WiWindy, WiThermometer } from "react-icons/wi";
import './highlights.css'

export const Highlights = ({ airData, highlightsProps }) => {

    const air_quality = {
        1: 'Good',
        2: 'Fair',
        3: 'Moderate',
        4: 'Poor',
        5: 'Very Poor'
    }

    const air_quality_color ={
        1 : '#00E400',
        2 : '#FFFF00',
        3 : '#FFA500',
        4 : '#FF4500',
        5 : '#A020F0',
    }

    const btnColor = air_quality_color[airData.list[0].main.aqi];

    //Time formate

    // Convert Unix timestamps to milliseconds
    const sunriseDate = new Date(highlightsProps.sunrise * 1000);
    const sunsetDate = new Date(highlightsProps.sunset * 1000);

    // Convert to Indian Standard Time (IST)
    const sunrise = sunriseDate.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata", hour: '2-digit', minute: '2-digit', hour12: true
    }).toUpperCase(); // Convert am/pm to uppercase

    const sunset = sunsetDate.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata", hour: '2-digit', minute: '2-digit', hour12: true
    }).toUpperCase(); // Convert am/pm to uppercase

    return (
        <div className='highlights'>
            <div className='title'>
                <h3>Today Highlights</h3>
            </div>
            <div className='highlights-wraper'>
                <div className="top">
                    <div className="air-quality">
                        <div className="aqi">
                            <h3>Air quality index</h3>
                            <button style={{backgroundColor: btnColor}}>{air_quality[airData.list[0].main.aqi]}</button>
                        </div>
                        <div className="gas">
                            <FiWind size={50} />
                            <div className='gas-value'>
                                <h4>PM2.5</h4>
                                <p>{airData.list[0].components.pm2_5}</p>
                            </div>
                            <div className='gas-value'>
                                <h4>SO2</h4>
                                <p>{airData.list[0].components.so2}</p>
                            </div>
                            <div className='gas-value'>
                                <h4>NO2</h4>
                                <p>{airData.list[0].components.no2}</p>
                            </div>
                            <div className='gas-value'>
                                <h4>O3</h4>
                                <p>{airData.list[0].components.o3}</p>
                            </div>
                        </div>
                    </div>

                    <div className="sun-times">
                        <div className="sun-title">
                            <h3>Sunrise & Sunset</h3>
                        </div>
                        <div className='rise-set'>
                            <div className="rise">
                                <div className='rise-icon'>
                                    <FiSunrise size={50} />
                                </div>
                                <div className='rise-data'>
                                    <h4>Sunrise</h4>
                                    <p>{sunrise}</p>
                                </div>
                            </div>
                            <div className="set">
                                <div className="set-icon">
                                    <FiSunset size={50} />
                                </div>
                                <div className="set-data">
                                    <h4>Sunset</h4>
                                    <p>{sunset}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom">
                    <div className="left">
                        <div className="humidity">
                            <h3>Humidity</h3>
                            <div className="humidity-data">
                                <WiHumidity size={50} />
                                <p>{highlightsProps.humidity} %</p>
                            </div>
                        </div>
                        <div className="pressure">
                            <h3>Pressure</h3>
                            <div className="pressure-data">
                                <WiWindy size={50} />
                                <p>{highlightsProps.pressure} hPa</p>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="visibility">
                            <h3>Visibility</h3>
                            <div className="visibility-data">
                                <FiEye size={50} />
                                <p>{highlightsProps.visibility} m</p>
                            </div>
                        </div>
                        <div className="feels-like">
                            <h3>Feels Like</h3>
                            <div className="feels-like-data">
                                <WiThermometer size={50} />
                                <p>{parseFloat(highlightsProps.feels_like).toFixed(1)}°C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
