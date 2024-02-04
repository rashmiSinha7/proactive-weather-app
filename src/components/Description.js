import React from "react";
import "./Description.css";

import { formatTime } from "../utils/functions/functions";

function Description(props) {
  const { description, currentConditions} = props;
  return (
    <div className="description">
      <p>{description}</p>
      <div className="primary_des">
      <p>Sunrise: {formatTime(currentConditions.sunrise)} </p>
      <p>Sunset: {formatTime(currentConditions.sunset)}</p>
      </div>
    </div>
  );
}

export default Description;
