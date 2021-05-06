import React from "react";
import WeatherIcon from "./weatherIcon"

export default function WeatherforecastDay(props){
    
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return(`${temperature}°`);
    }

    function minTemperature (){
        let temperature = Math.round(props.data.temp.main);
        return (`${temperature}°`);
    }

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        
        return (days[day])
    }

    return(
        <div>
            <div className="Weaatherforecast-day">
                {day()}
            </div>

            <WeatherIcon code={props.data.weather[0].icon} size={36} />

            <span>{maxTemperature()} </span> || <span>{minTemperature()}</span>

        </div>
    )

}