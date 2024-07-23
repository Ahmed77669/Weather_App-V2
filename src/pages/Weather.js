import React, { useEffect, useState } from 'react';
import "../Weather.css";
import weatherPhoto from "../photos/weather-app.png";
import userPhoto from "../photos/0d64989794b1a4c9d89bff571d3d5842.jpg";
import searchPhoto from "../photos/search.png";
import clear from "../photos/clear.png";
import cloud from "../photos/cloud.png";
import drizzle from "../photos/drizzle.png";
import rain from "../photos/rain.png";
import snow from "../photos/snow.png";
import wind from "../photos/wind.png";
import humidity from "../photos/humidity.png";

import { Link } from "react-router-dom";
import '../Weather.css';
const Weather =  () =>{

    const [weatherData, setWeatherData] = useState(false);
    const allIcons = {
        "01d":clear,
        "01n":clear,
        "02d":cloud,
        "02n":cloud,
        "03d":cloud,
        "03n":cloud,
        "04d":drizzle,
        "04n":drizzle,
        "09d":rain,
        "09n":rain,
        "10d":rain,
        "10n":rain,
        "13d":snow,
        "13n":snow,
    }
    const search = async (city)=>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=54e2c0bd6411f4bbf8bbbb538f7b88e0&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const icon = allIcons[data.weather[0].icon]||clear;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            });
        }catch(error){
            
        }
    }
    return(
        <div style={{backgroundColor:"#FFFFFF"}}>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between" , marginBottom:"50px"}}>
        <div style={{display: "flex",flexDirection: "row",marginLeft: "30px"}}>
          <div>
            <Link to="/">
            <img
              src={weatherPhoto}
              style={{width: "40px", marginTop: "50%", marginRight: "4px",cursor:"pointer"}}
            />
            </Link>
          </div>
          <div>
            <p style={{fontFamily: "Epilogue", fontWeight: "700", fontSize: "30px" , cursor:"pointer"}}>
              WeatherPro
            </p>
          </div>
    
        </div>
        <div style={{marginTop: "30px", marginRight: "40px"}}>
        <img src={userPhoto} style={{width:"40px"}}/>
        </div>
      </div>
      <div style={{placeSelf:"center", display:"flex", justifyContent:"center" }}>
        <p style={{fontFamily:'"Poppins", sans-serif', fontSize:"30px", fontWeight:"700"}}>Enter the name of a city to check the weather</p>
      </div>
      <div style={{display:"flex",marginLeft:"37%"}}>
        <input type='name' style={{ width:"300px",outline:"none" , borderRadius:"30px"}} placeholder='Enter Name of City'/>
        <div style={{width:"30px" , alignItems:"center"}}>
        <button id="search_b">
            <img src={searchPhoto} style={{width:"20px" ,alignContent:"center"}}/>
        </button>
        </div>
      </div>
      <div id="mains">
      <div id="cont">
        <div style={{width:"100%"}}>
        <img src={weatherData.icon} style={{width:"224px" , height:"224px" , marginLeft:"22%"}}/>
        </div>
        <div style={{display:"flex", justifyContent:"center",
        }}>
            <p style={{fontFamily:'"Poppins", sans-serif', fontSize:"60px", marginTop:"0",marginBottom:"0px", color:"#fff", lineHeight:"50px"}}>{weatherData.temperature}°c<br/><span style={{fontSize:"30px" , marginLeft:"3%" , fontWeight:"400"}}>{weatherData.location}</span></p>
        </div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{display:"flex" , marginLeft:"20px", marginTop:"40px"}}>
                <img src={humidity} style={{height:"30px" , marginRight:"5px"}}/>
                <div style={{display:'flex',justifyContent:"top"}}>
                <p style={{textAlign:"center" , marginTop:"10%",color:"white",fontFamily:'"Poppins", sans-serif' }}>{weatherData.humidity}%<br/><span>Humidity</span></p>
                </div>
            </div>
            <div style={{display:"flex" , marginRight:"20px", marginTop:"40px"}}>
                <img src={wind} style={{height:"30px" , marginRight:"5px"}}/>
                <div style={{display:'flex',justifyContent:"top"}}>
                <p style={{textAlign:"center" , marginTop:"8%",color:"white",fontFamily:"'Poppines', sans-serif"}}>{weatherData.windSpeed} Km/h<br/><span>Wind Speed</span></p>
                </div>
            </div>

            </div>
        </div>
      </div>
      </div>
        
    );
};

export default Weather;