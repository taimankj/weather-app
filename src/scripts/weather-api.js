import { renderWeather } from "./dom-rendering.js";

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
    const temp = currentWeather.temp;
    const precipitation = currentWeather.precipprob;
    const humidity = currentWeather.humidity;
    const windSpeed = currentWeather.windspeed;

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
