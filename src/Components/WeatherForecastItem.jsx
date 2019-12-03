import React from 'react'
import WeatherIcon from 'react-icons-weather'

function WeatherForecastItem({weatherForecastItem}){

    const { dt, weather } =  weatherForecastItem
    const mainWeather = weather[0] || weather
    const date = new Date(dt*1000)
    const [day, month] = date.toLocaleDateString().split('/')
    const [hour, minute] = date.toLocaleTimeString().split(':')

    return (
        <div className="weather-forecast-item">
            <WeatherIcon name="owm" iconId={mainWeather.id.toString()} />
            <div>
                <p>{ `${day}/${month} alle ${hour}:${minute}` }</p>
                <p className="description">{mainWeather.description}</p>
            </div>
        </div>
    )
}

export default WeatherForecastItem