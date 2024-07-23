import React, { useState } from "react";
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
import axios from "axios";
import { Link } from "react-router-dom";

const Weather = () => {
  const [data, setData] = useState({
    celcius: 10,
    name: "London",
    humidity: 10,
    speed: 2,
    image: clear,
  });
  const [name, setName] = useState("");
  const [isDataLoaded, setIsDataLoaded] = useState(false); 

  const handleClick = () => {
    if (name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=54e2c0bd6411f4bbf8bbbb538f7b88e0&units=metric`;
      axios
        .get(apiUrl)
        .then((res) => {
          let imagePath = clear; // Default image

          switch (res.data.weather[0].main) {
            case "Clouds":
              imagePath = cloud;
              break;
            case "Clear":
              imagePath = clear;
              break;
            case "Rain":
              imagePath = rain;
              break;
            case "Drizzle":
              imagePath = drizzle;
              break;
            case "Snow":
              imagePath = snow;
              break;
            default:
              imagePath = cloud;
          }
          setData({
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            image: imagePath,
          });
          setIsDataLoaded(true); 
        })
        .catch((error) => {
          console.error("There was an error fetching the weather data!", error);
          setIsDataLoaded(false); 
        });
    }
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "50px",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "30px" }}
        >
          <div>
            <Link to="/">
              <img
                src={weatherPhoto}
                style={{
                  width: "40px",
                  marginTop: "50%",
                  marginRight: "4px",
                  cursor: "pointer",
                }}
              />
            </Link>
          </div>
          <div>
            <p
              style={{
                fontFamily: "Epilogue",
                fontWeight: "700",
                fontSize: "30px",
                cursor: "pointer",
              }}
            >
              WeatherPro
            </p>
          </div>
        </div>
        <div style={{ marginTop: "30px", marginRight: "40px" }}>
          <img src={userPhoto} style={{ width: "40px" }} />
        </div>
      </div>
      <div
        style={{
          placeSelf: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          Enter the name of a city to check the weather
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <input
          type="name"
          style={{
            width: "300px",
            outline: "none",
            borderRadius: "30px",
            marginLeft: "120px",
          }}
          placeholder="Enter Name of City"
          onChange={(e) => setName(e.target.value)}
        />
        <div style={{ width: "30px", alignItems: "center" }}>
          <button id="search_b" onClick={handleClick}>
            <img
              src={searchPhoto}
              style={{ width: "20px", alignContent: "center" }}
            />
          </button>
        </div>
      </div>
      {isDataLoaded && ( 
        <div id="mains">
          <div id="cont">
            <div style={{ width: "100%" }}>
              <img
                src={data.image}
                style={{ width: "224px", height: "224px", marginLeft: "20%" }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "60px",
                  marginTop: "0",
                  marginBottom: "0px",
                  color: "#fff",
                  lineHeight: "60px",
                }}
              >
                {Math.floor(data.celcius)}°c
                <br />
                <span style={{ fontSize: "35px", fontWeight: "400" }}>
                  {data.name}
                </span>
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  marginLeft: "20px",
                  marginTop: "40px",
                }}
              >
                <img
                  src={humidity}
                  style={{ height: "30px", marginRight: "5px" }}
                />
                <div style={{ display: "flex", justifyContent: "top" }}>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "10%",
                      color: "white",
                      fontFamily: '"Poppins", sans-serif',
                      lineHeight: "20px",
                    }}
                  >
                    {data.humidity}%<br />
                    <span>Humidity</span>
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginRight: "20px",
                  marginTop: "40px",
                }}
              >
                <img
                  src={wind}
                  style={{ height: "30px", marginRight: "5px" }}
                />
                <div style={{ display: "flex", justifyContent: "top" }}>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "8%",
                      color: "white",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {data.speed} Km/h
                    <br />
                    <span>Wind Speed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;