import { loadBackground } from "./load-background.js";
import { resetTempToggle } from "./temp-converter.js";

export function renderWeather(
  location,
  time,
  temp,
  precipitation,
  humidity,
  windSpeed,
) {
  const cityCountryElement = document.querySelector("#city-country");
  const timeElement = document.querySelector("#time");
  const tempElement = document.querySelector("#degrees");
  const precipitationElement = document.querySelector("#precipitation span");
  const humidityElement = document.querySelector("#humidity span");
  const windElement = document.querySelector("#wind span");

  cityCountryElement.innerText = location;
  timeElement.innerText = time;
  tempElement.innerText = temp;
  precipitationElement.innerText = precipitation;
  humidityElement.innerText = humidity;
  windElement.innerText = windSpeed;

  loadBackground(time);

  resetTempToggle();
}
