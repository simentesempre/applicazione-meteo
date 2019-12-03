import { useState, useEffect } from 'react'

const apiKey    = process.env.REACT_APP_OPEN_WEATHER_API_KEY
const units     = 'metric'
const lang      = 'it'
const apiPath   = `https://api.openweathermap.org/data/2.5/%type%?appid=${apiKey}&units=${units}&lang=${lang}`

export const useWeather = ({isGeoAvailable, isGeoAllowed, latLng}) => {
    const [currentWeather, setCurrentWheather]  = useState(false)
    const [weatherForecast, setWeatherForecast] = useState(false)
    const [isLoaded, setIsLoaded]               = useState(false)
    const [weatherStatus, setWeatherStatus]     = useState('')
    useEffect(() => {
        if(!currentWeather&&!weatherForecast&&latLng&&isGeoAvailable&&isGeoAllowed) {
            getWeatherByCoordinates(latLng, 'weather')
            getWeatherByCoordinates(latLng, 'forecast')
        }
    }, [currentWeather, weatherForecast, latLng, isGeoAvailable, isGeoAllowed])
    useEffect(() => {
        if(currentWeather&&weatherForecast) {
            setIsLoaded(true)
        }
    }, [currentWeather, weatherForecast])
    useEffect(() => {
        if(!latLng||isGeoAvailable||isGeoAllowed) {
            setIsLoaded(true)
        }
    }, [latLng, isGeoAvailable, isGeoAllowed])

    const getWeatherByCoordinates =  (latLng, type) => {
        const {lat, lng} = latLng
        const typedPath = apiPath.replace('%type%', type)
        let endpoint = `${typedPath}&lat=${lat}&lon=${lng}`
        if(type === 'forecast'){
            endpoint = `${endpoint}&cnt=16`
        }
        fetch(endpoint)
        .then( res => res.json())
        .then( json => {
            if(json.cod === "200" || json.cod === 200){
                switch(type) {
                    case 'weather':
                        setCurrentWheather(json)
                        break
                    case 'forecast':
                            setWeatherForecast(json)
                            break
                    default:
                        setCurrentWheather(json)
                }
            } else {
                setIsLoaded(true)
                setWeatherStatus(`Errore nel reperimento dei dati meteo: ${json.message}`)
            }
        })
        .catch(err => {
            setIsLoaded(true)
            setWeatherStatus('Errore nel reperimento dei dati meteo')
        })
    }

    return [currentWeather, weatherForecast, isLoaded, weatherStatus]
}