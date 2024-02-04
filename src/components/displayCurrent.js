import React from "react";
import "./displayCurrent.css";

import { setIcon, directionText } from "../utils/functions/functions";

function DisplayCurrent(props) {
  const { currentConditions, address, daysForecast } = props;
  const currentIcon = setIcon(currentConditions.icon);
  //console.log(daysForecast);
  return (
    <div className="displayCurrent">
      <div className="image-icon">
        {
          <img
            className="currentIcon"
            src={currentIcon}
            alt={currentConditions.icon}
          ></img>
        }
        <p>{currentConditions.conditions}</p>
      </div>{" "}
      <div className="text">
        <div className="primary">
          <h3>{address}</h3>
          <h3>Temp: {currentConditions.temp}°C</h3>
          {/* <p>Max Temp: {daysForecast[0].tempmax}°C</p>
          <p>Min Temp: {daysForecast[0].tempmin}°C</p> */}
        </div>
        <div className="secondary">
          <p>Feels Like: {currentConditions.feelslike}°C</p>
          <p>Visibility: {currentConditions.visibility} km.</p>

          <p>Humidity: {currentConditions.humidity}%</p>
          <p>
            WindSpeed: {currentConditions.windspeed} km/hr{" "}
            {directionText(currentConditions.winddir)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DisplayCurrent;
