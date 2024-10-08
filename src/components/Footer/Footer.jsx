import React from 'react'
import './footer.css'
import logo from '../../assets/images/logo.png'

export const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='footer'>
      <div className="title-logo">
        <img src={logo} alt="" />
      </div>

      <div className="copyrights">
        <p>&copy; {year}. All rights reserved.</p>
        <p>Created by <a href="your-portfolio-link" target="_blank">Abdul Razith</a></p>
      </div>

      <div className='sources'>
      <div className="api">
        <p>Powered by data from <a href="https://openweathermap.org/" target="_blank">OpenWeather</a></p>
      </div>

      <div className="svg">
        <p>SVG Icons by <a href="https://bas.dev/" target="_blank">Bas Milius</a></p>
      </div>
      </div>
    </footer>
  )
}
