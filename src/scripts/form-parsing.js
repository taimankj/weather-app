import { getLocationWeather } from "./weather-api.js";

const locationForm = document.querySelector("#location-search");
const city = document.querySelector("#city");
const country = document.querySelector("#country");

function checkInputValidity(input) {
  const validityState = input.validity;

  if (validityState.patternMismatch) {
    input.setCustomValidity("Invalid input.");
  } else if (validityState.valueMissing) {
    input.setCustomValidity("No blank entries allowed.");
  } else {
    input.setCustomValidity("");
  }
}

export function fireFormEvents() {
  city.addEventListener("input", () => {
    checkInputValidity(city);
  });

  country.addEventListener("input", () => {
    checkInputValidity(country);
  });

  locationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(locationForm);
    const { city, country } = Object.fromEntries(formData);
    getLocationWeather(city, country);
  });
}
