import React, {useState} from "react";
import axios from "axios"

export default function SearchEngine(){
    let [city,setCity] = useState("");
    const [ready,setReady] = useState(false);
    const [weather,setWeather] = useState("");
    const [data,setData] = useState(false);

    function getData(response){
        console.log(response.data)
    
        setData(true)        
        setWeather({
            temperature: Math.round(response.data.main.temp),
            temperatureF: Math.round((response.data.main.temp * 9 / 5)+32),
            feelsLike: Math.round(response.data.main.feels_like),
            wind: Math.round(response.data.wind.speed),
            humidity: response.data.main.humidity,
            name: response.data.name
        })
    
    }

    function changeCity(event){
        setCity(event.target.value);
        city.trim();
        city.toLowerCase();
    }
    
    function handleSubmit(event){
        event.preventDefault();
        setReady(true)
    }

    let form = (
        <form onSubmit={handleSubmit}>
            <input onChange={changeCity} type="text" placeholder="Search for a city" className="input1" />
            <input  type="submit" value="🔎 " className="input2" />            
        </form>
    );


if(ready && data){
    return(
        <div>
            {form} <br /> <hr />

            <h2>The weather in {weather.name} is currently {weather.temperature} <button className="celsius">°C</button> | <button className="farenheit">°F</button> </h2>
            <ul>
                <li>Feels like {weather.feelsLike} °C </li>
                <li>Wind speed: {weather.wind} km/h </li>
                <li>Humidity: {weather.humidity} % </li>
            </ul>

            
        </div>
    )
}else{


    let apiKey = "3fefe32c502f2c470839a5386891b04a"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    
    axios.get(apiUrl).then(getData)


    return(
        <div>
            {form} <br /> <hr />

            <h2>Fail</h2>
        </div>
    )
}

}