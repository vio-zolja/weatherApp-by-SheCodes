import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./weatherInfo";
import WeatherForecast from "./weatherForecast"

export default function SearchEngine(){
    const [weather,setWeather] = useState({ready: false});
    const [city,setCity] = useState("");

    function handleResponse(response){
        setWeather({
            ready: true,
            coordinates: response.data.coord,
            temperature: Math.round(response.data.main.temp),
            humidity: Math.round(response.data.main.humidity),
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].icon,
            wind: Math.round(response.data.wind.speed),
            city: response.data.name,
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function changeCity(event){
        setCity(event.target.value)
    }

    function search(){
        let apiKey = "3fefe32c502f2c470839a5386891b04a"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse)
    }

    if(weather.ready){
        return(
            <div>
    
            <form onSubmit={handleSubmit}>
                <input onChange={changeCity} type="search" placeholder="Search for a city" className="input1" />
                <input  type="submit" value="🔎 " className="input2" />            
            </form>
    
            <br /> <hr />
    


            <WeatherInfo data={weather} />
            <WeatherForecast coordinates={weather.coordinates} />

            </div>
        )
    }else{
        return(
            <div>
                <form onSubmit={handleSubmit}>
                <input onChange={changeCity} type="search" placeholder="Search for a city" className="input1" />
                <input  type="submit" value="🔎 " className="input2" />            
            </form>
    
            <br /> <hr />

            <p>Check the weather in any city</p>
            </div>
        )
    }

}