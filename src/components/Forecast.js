import React from "react";
import "./Forecast.css";
import {formatWeekDay, setIcon} from "../utils/functions/functions"

function Forecast(props) {
  const { daysForecast } = props;
  return (
    <div className="forecast">
      <div className="daysContainer">
        {daysForecast.map((day, index) => {
          return (
            <div className="dayContainer" key ={index}>
              <div className="day">
                <img src={setIcon(day.icon)}></img>
                <p className="day-p">{index===0? "Today": (index===1?"Tomorrow": formatWeekDay(day.datetime))}</p><p className="day-p">{day.conditions}</p>
                <p className="day-p">Min : {day.tempmin}°C</p>
                <p className="day-p">Max : {day.tempmax}°C</p>
              </div>
              {index < daysForecast.length - 1 && <hr></hr>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
