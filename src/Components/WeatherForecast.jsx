import React, { useState } from 'react'
import WeatherForecastItem from './WeatherForecastItem'

function WeatherForecast({weatherForecast}){
    
    const { list } = weatherForecast
    const [ isOpened, setIsOpened ] = useState(false)

    const handleClick = () => {
        setIsOpened(!isOpened)
    }

    return (
        <div 
            className={`weather-forecast ${isOpened ? 'open' : ''}`}
            onClick={handleClick}>
            <div className="medium">Previsioni</div>
            <div className="weather-forecast-inner">
                {
                    list.map( item => {
                        const { dt } =  item
                        return <WeatherForecastItem key={dt} weatherForecastItem={item} />
                    })
                }
            </div>
            <div className="handle">
                <div>
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div>
    )
}

export default WeatherForecast