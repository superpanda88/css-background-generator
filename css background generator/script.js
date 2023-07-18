var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var resetBtn = document.querySelector(".reset");
var input = document.querySelector("input");
var randomBtn = document.querySelector(".random");
var calculatedTextset = 

function randomColor() {
  let hexCode = "#";

  while (hexCode.length < 7) {
    hexCode += Math.round(Math.random() * 15).toString(16);
  }

  return hexCode;
}


function setRandomValue() {
  color1.value = randomColor();
  color2.value = randomColor();
  body.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function reset() {
  color1.value = "#ff0000";
  color2.value = "#ffff00";
  body.style.background =
    "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0))";
  css.textContent = body.style.background + ";";
}

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
resetBtn.addEventListener("click", reset);
randomBtn.addEventListener("click", setRandomValue);
