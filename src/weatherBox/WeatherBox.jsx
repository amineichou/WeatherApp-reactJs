import React, { useState } from 'react';
import './WeatherBox.css';
const WeatherBox = () => {
    const axios = require('axios');
    const [weatherInC, setWeatherInC] = useState("");
    const [weatherInF, setWeatherInF] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [wind, setWind] = useState("");
    const [humidity, setHumidity] = useState("");
    const [pressure, setPressure] = useState("");
    axios.get('https://weatherappliveapi.herokuapp.com/autoWeather')
        .then(res => {
            setWeatherInC(res.data.weatherValueInC);
            setWeatherInF(res.data.weatherValueInF);
            setTime(res.data.time);
            setLocation(res.data.location);
            setDescription(res.data.description);
            setWind(res.data.wind);
            setHumidity(res.data.Humidity);
            setPressure(res.data.pressure);
        }).catch(error => console.log(error))

    const locationStatue = () => {
        if ("geolocation" in navigator) {
            console.log("Available location")
        } else {
            alert("Location Not Available");
        }
    }
    locationStatue();

    const refreshPage = () => {
        window.location.reload(false);
    }

    const setImage = (description) => {
        switch (description) {
            case "Partly Cloudy":
            case "Mostly Sunny":
            case "Mostly Cloudy":
                return "./icons/cloudy-mostly.png";
            case "Rain":
            case "Rainy":
                return "./icons/rain.png";
            case "Clouds":
            case "Cloudy":
                return "./icons/clouds.png";
            case "Snow":
            case "Snowy":
                return "./icons/snowy.png";
            case "Sunny":
                return "./icons/sunny.png";
            case "Thunderstorm":
            case "Rain And Thunderstorm":
                return "./icons/thunderstorm.png"
            default:
                return "./icons/sleeping.png";
        }
    }
    return (
        <div className='mainBox'>
            <svg onClick={refreshPage} xmlns="http://www.w3.org/2000/svg" className='refreshPage' fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
            <div className="header">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <h1>{location ? location : "Can't load your location"}</h1>
            </div>
            <div className="midle">
                <div className="midle-mainInfo">
                    <img
                        src={setImage(description) ? setImage(description) : "./icons/sleeping.png"}
                        alt=""
                    />
                    <div>
                        <h1 className='midle-weatherValC'>{weatherInC ? weatherInC : "00°c"}</h1>
                        <h1 className='midle-weatherValF'>{weatherInF ? weatherInF : "00°F"}</h1>
                    </div>
                </div>
            </div>
            <div className="bottom-desc">
                <h1>{description ? description : "Sunny"}</h1>
                <p>{time ? time : "As of 00:00 GMT"}</p>
            </div>
            <div className="bottom">
                <div className="bottom-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <h1>{wind ? wind : "00 km/h"}</h1>
                </div>
                <div className="bottom-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                        <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" />
                    </svg>
                    <h1>{humidity ? humidity : "00%"}</h1>
                </div>
                <div className="bottom-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z" />
                    </svg>
                    <h1>{pressure ? pressure : "00mb"}</h1>
                </div>
            </div>
        </div>
    );
}

export default WeatherBox;
