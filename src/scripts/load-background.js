import dawn from "../background/01-dawn.svg";
import sunrise from "../background/02-sunrise.svg";
import morning from "../background/03-morning.svg";
import forenoon from "../background/04-forenoon.svg";
import noon from "../background/05-noon.svg";
import afternoon from "../background/06-afternoon.svg";
import dusk from "../background/07-dusk.svg";
import twilight from "../background/08-twilight.svg";
import evening from "../background/09-evening.svg";
import night from "../background/10-night.svg";
import midnight from "../background/11-midnight.svg";

function setBackground(image) {
  const { style } = document.body;
  style.backgroundImage = `url("${image}")`;
}

export function loadBackground(time) {
  const [clock, meridiem] = time.split(" ");
  let hour = Number(clock.split(":")[0]);

  // 12 AM is hour 0, so it lands in the midnight range
  if (meridiem === "AM" && hour === 12) hour = 0;

  if (meridiem === "AM") {
    if (hour >= 4 && hour < 6) {
      setBackground(dawn);
    } else if (hour >= 6 && hour < 7) {
      setBackground(sunrise);
    } else if (hour >= 7 && hour < 9) {
      setBackground(morning);
    } else if (hour >= 9 && hour < 12) {
      setBackground(forenoon);
    } else if (hour >= 0 && hour < 4) {
      setBackground(midnight);
    }
  } else if (meridiem === "PM") {
    if (hour === 12) {
      setBackground(noon);
    } else if (hour >= 1 && hour < 5) {
      setBackground(afternoon);
    } else if (hour >= 5 && hour < 7) {
      setBackground(dusk);
    } else if (hour >= 7 && hour < 8) {
      setBackground(twilight);
    } else if (hour >= 8 && hour < 9) {
      setBackground(evening);
    } else if (hour >= 9 && hour < 12) {
      setBackground(night);
    }
  }
}
