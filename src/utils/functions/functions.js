import ClearDay from "../Icons/sun.png";
import PartlyCloudyDay from "../Icons/cloudy-day.png";
import PartlyCloudyNight from "../Icons/cloudy-night.png";
import ClearNight from "../Icons/clear-night.png";
import RainDay from "../Icons/rain-day.png";
import RainNight from "../Icons/rain-night.png";

import Cloudy from "../Images/cloudy-day.jpg";
import Clear from "../Images/clear-day.jpg";
import PartiallyCloudy from "../Images/partly-cloudy-day.jpg";
import Rainy from "../Images/rain-night.jpg";
import RainyNightImg from "../Images/rain-night.jpg";
import ClearNightImg from "../Images/clear-night.jpg";
import CloudyNightImg from "../Images/cloudy-night.jpg";
import PartiallyCloudyNight from "../Images/partially-cloudy-night.jpg";

export function setIcon(iconType) {
  if (iconType === "partly-cloudy-day") {
    return PartlyCloudyDay;
  } else if (iconType === "clear-day") {
    return ClearDay;
  } else if (iconType === "partly-cloudy-night") {
    return PartlyCloudyNight;
  } else if (iconType === "clear-night") {
    return ClearNight;
  } else if (iconType === "rain") {
    return RainDay;
  } else if (iconType === "rain") {
    return RainNight;
  } else {
    return ClearDay;
  }
}

export function setContainerBackground(currentConditions) {
  if (currentConditions && currentConditions.conditions) {
    if (currentConditions.conditions.toLowerCase().includes("clear")) {
      if (currentConditions.icon === "clear-night") {
        return ClearNightImg;
      }
      return Clear;
    } else if (currentConditions.conditions.toLowerCase().includes("rain")) {
      if (currentConditions.icon === "rain-night") {
        return RainyNightImg;
      }
      return Rainy;
    }
    else if (currentConditions.conditions.toLowerCase().includes("partially cloudy")) {
      if (currentConditions.icon === "partly-cloudy-night") {
        return PartiallyCloudyNight;
      }
      return PartiallyCloudy;
    } else if (
      currentConditions.conditions.toLowerCase().includes("overcast") ||
      currentConditions.conditions.toLowerCase().includes("cloudy")
    ) {
      if (currentConditions.icon === "cloudy-night") {
        return CloudyNightImg;
      }
      return Cloudy;
    } 
  }
  return "";
}

export function directionText(d) {
  let directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

  d += 22.5;

  if (d < 0) d = 360 - (Math.abs(d) % 360);
  else d = d % 360;

  let w = parseInt(d / 45);
  return `${directions[w]}`;
}

export function formatTime(time) {
  // console.log(time-'12:00:00')
  if (time > 12) {
    return `${time - 12} pm`;
  } else return `${time} hrs`;
}

export function formatWeekDay(epoch) {
  let weekDay = new Date(epoch);
  return `${String(weekDay).split(" ")[0]} `;
}
