const themeSwitch = document.querySelector(".theme__switch");
const wrapper = document.querySelector(".wrapper");
const display = document.querySelector(".display");
const body  = document.querySelector("body")

const appendToDisplay = (value) => (display.value += value);
const clearDisplay = () => (display.value = "");
const backspace = () => (display.value = display.value.slice(0, -1));
const power = () => (display.value = Math.pow(parseFloat(display.value), 2));


themeSwitch.addEventListener("click", () => body.classList.toggle("active"));
display.addEventListener("keydown", (event) => event.key === "Enter" ?  calculate() : false);

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
