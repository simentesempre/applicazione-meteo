import React from 'react'

import CurrentWeather from './CurrentWeather'
import WeatherForecast from './WeatherForecast'

function Weather({currentWeather, weatherForecast, isLoaded, geoStatus, weatherStatus}){
    return (
        <div className="weather-wrapper">
            {currentWeather && isLoaded &&  (
                <CurrentWeather currentWeather={currentWeather}/>
            )}
            {weatherForecast && isLoaded &&  (
                <WeatherForecast weatherForecast={weatherForecast}/>
            )}
            {!currentWeather && !weatherForecast && (
                <div className="status medium">
                    {!isLoaded && (
                        <p>Caricamento condizioni e meteo in corso</p>
                    )}                 
                    {weatherStatus && (
                        <p>{weatherStatus}</p>
                    )}
                    {geoStatus && (
                        <p>{geoStatus}</p>
                    )}                  
                </div>
            )}
        </div>
    )
}

export default Weather