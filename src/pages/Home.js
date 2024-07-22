import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";

import imageSrc from "../photos/DeWatermark.ai_1721056739125.png";
import backgroundImage from "../photos/vecteezy_abstract-blue-fluid-wave-background_.jpg";
import myImage from "../photos/DeWatermark.ai_1721399071946.png";
import weatherPhoto from "../photos/weather-app.png";

const Home = () => {
  return (
    <div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
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
          <Link to="/LoginPage">
          <button id="Lo" >Login</button>
          </Link>
          <Link to="/SignUp">
          <button id="Si">SignUp</button>
          </Link>
        </div>
      </div>
      <div style={{justifyContent:"space-between",display: "flex",flexDirection: "row", flexWrap: "wrap"}}>
        <div>
          <div style={{marginLeft: "80px"}}>
            <div className="wS">
              <p className="w_">
                Welcome to WeatherPro!
              </p>
            </div>
            <div className="mS">
              <p className="m_">
                At WeatherPro, we are dedicated to providing you with the most
                accurate and up-to-date weather information. Whether you're
                planning your day, preparing for a trip, or just curious about
                the weather, we've got you covered. Explore real-time weather
                updates, detailed forecasts, and more to stay ahead of the
                weather every day.
              </p>
            </div>
            <div>
            <Link to="/LoginPage">
              <button id="Lo1">Login</button>
              </Link>
              <Link to="/SignUp">
              <button id="Si1">SignUp</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            src={myImage}
            // style={{width: "750px",marginTop:"50%", marginRight: "20px"}}
            className="weather_i"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
