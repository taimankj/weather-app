import "./styles.css";
import { fireFormEvents } from "./scripts/form-parsing.js";
import { getLocationWeather } from "./scripts/weather-api.js";
import { renderWeather } from "./scripts/dom-rendering.js";
import { initTempChangeBtns } from "./scripts/temp-converter.js";

fireFormEvents();
getLocationWeather("Talofofo", "Guam");
initTempChangeBtns();
