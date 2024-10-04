import React from 'react'
import './loader.css'

export const Loader = () => {
    return (
        <div className="loader-container">
            <div class="loader">
                <div class="cloud front">
                    <span class="left-front"></span>
                    <span class="right-front"></span>
                </div>
                <span class="sun sunshine"></span>
                <span class="sun"></span>
                <div class="cloud back">
                    <span class="left-back"></span>
                    <span class="right-back"></span>
                </div>
            </div>
        </div>
    )
}
