import React from 'react'
import './Assets/Scss/style.scss'
import { useGeolocation } from './Hooks/useGeolocation'
import { useWeather } from './Hooks/useWeather'
import Weather from './Components/Weather'

function App() {
    const [isGeoAvailable, isGeoAllowed, latLng, geoStatus] = useGeolocation()
    const [currentWeather, weatherForecast, isLoaded, weatherStatus] = useWeather({isGeoAvailable, isGeoAllowed, latLng})
    return  (
        <Weather 
            currentWeather={currentWeather} 
            weatherForecast={weatherForecast} 
            isLoaded={isLoaded} 
            geoStatus={geoStatus}
            weatherStatus={weatherStatus} />
    )
}

export default App