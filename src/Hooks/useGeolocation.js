import { useState, useEffect } from 'react'

export const useGeolocation = () => {
    const [isGeoAvailable, setIsGeoAvailable]  = useState(true)
    const [isGeoAllowed,   setIsGeoAllowed]    = useState(false)
    const [latLng,         setLatLng]          = useState(false)
    const [geoStatus,      setGeoStatus]       = useState('')

    const geoLocalize = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(res => {
                const { latitude, longitude } = res.coords
                setIsGeoAllowed(true)
                setLatLng({lat:latitude, lng:longitude})
                setGeoStatus(`La geolocalizzazione è avvenuta correttamente`)
            }, err => {
                setGeoStatus(`Errore nella geolocalizzazone: ${err.message}`)
            })
        } else {
            setIsGeoAvailable(false)
            setGeoStatus('La geolocalizzazione non è disponibile nel tuo browser')
        }
    }

    useEffect(()=>{
        if(!latLng){
            geoLocalize()
        }
    })

    return [isGeoAvailable, isGeoAllowed, latLng, geoStatus]
}