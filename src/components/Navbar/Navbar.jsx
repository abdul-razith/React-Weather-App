import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './navbar.css'
import logo from '../../assets/images/logo.png'
import { FiMapPin, FiSearch } from "react-icons/fi";


export const Navbar = ({ setCity, setCurrentCoord, setIsBtnClicked}) => {

    const searchCity = (e) => {
        if (e.key == "Enter") {
            setCity(e.target.value);
        }
    }

    const currentLocation = () => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        function success(pos) {
            const crd = pos.coords;

            console.log("Your current position is:");
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);

            setCurrentCoord({
                lat : crd.latitude,
                lon : crd.longitude,
            })

            setIsBtnClicked(true);
            
        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);

    }


    return (
        <>
            <nav>
                <div className="title">
                    <img src={logo} alt="" />
                </div>
                <div className="search-bar">
                    <FiSearch className='icon-search' />
                    <input type="text" placeholder='Search City....' onKeyDown={(e) => searchCity(e)} />
                </div>
                <div className="location-btn" onClick={() => currentLocation()}>
                    <FiMapPin />
                    <button>Current Location</button>
                </div>
            </nav>
        </>
    )
}
