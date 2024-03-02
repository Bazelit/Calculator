// npx rollup -p @rollup/plugin-node-resolve index.js -o bundle.js

// import "@material/web/button/filled-tonal-button.js";
// import "@material/web/button/outlined-button.js";
// import "@material/web/checkbox/checkbox.js";
// import "@material/web/FAB/FAB.js";
// import "@material/web/switch/switch.js";
// import "@material/web/textfield/filled-text-field.js";
// import "@material/web/textfield/outlined-text-field.js";

const themeSwitch = document.querySelector(".theme__switch");
const wrapper = document.querySelector(".wrapper");

themeSwitch.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
