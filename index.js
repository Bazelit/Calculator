import "@material/web/button/filled-tonal-button.js";
import "@material/web/button/elevated-button.js";
import "@material/web/button/filled-button.js";
import "@material/web/switch/switch.js";
import "@material/web/textfield/outlined-text-field.js";

const themeSwitch = document.querySelector(".theme__switch");
const display = document.querySelector(".display");
const body = document.querySelector("body");

const appendToDisplay = (value) => (display.value += value);
const clearDisplay = () => (display.value = "");
const backspace = () => (display.value = display.value.slice(0, -1));
const power = () => (display.value = Math.pow(parseFloat(display.value), 2));

themeSwitch.addEventListener("click", () => body.classList.toggle("active"));
display.addEventListener("keydown", (event) =>
  event.key === "Enter" ? calculate() : false
);

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
