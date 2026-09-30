import { renderWeather } from "./dom-rendering.js";
import { storage } from "./local-storage-api.js";

export async function getLocationWeather(city, country) {
  const key = "LVDJ4STUFCLZJ5ZCLMJXTNXUJ";
  try {
    const weatherResponse = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${country}?key=${key}&include=current`,
    );
    const weatherData = await weatherResponse.json();
    const currentWeather = weatherData.currentConditions;

    const location = weatherData.resolvedAddress;
    const time = getTime(weatherData.timezone);
    const temp = getTemp(weatherData.days[0].temp);
    const precipitation = getPrecipitation(weatherData.days[0].precip);
    const humidity = getHumidity(currentWeather.humidity);
    const windSpeed = getWind(currentWeather.windspeed);

    storage.saveTemp(temp);

    renderWeather(location, time, temp, precipitation, humidity, windSpeed);
  } catch (err) {
    console.error(err);
  }
}

function getTime(timezone) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());
}

function getTemp(temp) {
  return `${Math.round(Number(temp))}`;
}

function getHumidity(humidity) {
  return `${Math.round(Number(humidity))}`;
}

function getWind(wind) {
  return `${Math.round(Number(wind))}`;
}

function getPrecipitation(precip) {
  return `${Math.round(Number(precip) * 100)}`;
}
