import React from 'react'
import './navbar.css'
import logo from '../../assets/images/logo.png'
import { FiMapPin, FiSearch } from "react-icons/fi";


export const Navbar = ({setCity}) => {

    const searchCity = (e) => {
        if (e.key == "Enter"){
            setCity(e.target.value);
        }
    }
    
  return (
    <>
        <nav>
            <div className="title">
                <img src={logo} alt="" />
            </div>
            <div className="search-bar">
                <FiSearch className='icon-search' />
                <input type="text" placeholder='Search City' onKeyDown={(e)=>searchCity(e)}/>
            </div>
            <div className="location-btn">
                <FiMapPin />
                <button>Current Location</button>
            </div>
        </nav>
    </>
  )
}
