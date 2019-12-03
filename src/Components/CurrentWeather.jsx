import React from 'react'
import WeatherIcon from 'react-icons-weather'

function CurrentWeather({currentWeather}){

    const { weather, main, name, dt } =  currentWeather
    const mainWeather = weather[0] || weather
    return (
        <div className="current-weather">
            <div className="current-weather-inner">
                <div className="bigger">
                    <WeatherIcon name="owm" iconId={mainWeather.id.toString()} /> {Math.round(main.temp)}&deg;C
                </div>
                <div className="big">
                    Oggi a <span className="strong">{name}</span> c'è <span className="strong">{mainWeather.description}</span>
                </div>
                <div className="small">
                    Ultimo aggiornamento: { new Date((dt*1000)).toLocaleString('it-IT') }
                </div>
                <div className="small">
                    <a className="strong" href="https://synesthesia.it/">Powered by Synesthesia</a>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather