import { storage } from "./local-storage-api.js";

const temp = document.querySelector("#degrees");
const tempType = document.querySelector("#degrees-type");
const fahrenheitBtn = document.querySelector("#fahrenheit");
const celsiusBtn = document.querySelector("#celsius");

// Celsius
// (F - 32) * 5/9
function fToC(f) {
  return Math.round((f - 32) * (5 / 9));
}

export function initTempChangeBtns() {
  celsiusBtn.addEventListener("click", () => {
    tempType.innerText = "°C";
    temp.innerText = `${fToC(storage.getTemp())}`;
    celsiusBtn.disabled = true;
    fahrenheitBtn.disabled = false;
  });

  fahrenheitBtn.addEventListener("click", () => {
    tempType.innerText = "°F";
    temp.innerText = `${storage.getTemp()}`;
    celsiusBtn.disabled = false;
    fahrenheitBtn.disabled = true;
  });
}

export function resetTempToggle() {
  fahrenheitBtn.disabled = true;
  celsiusBtn.disabled = false;
}
