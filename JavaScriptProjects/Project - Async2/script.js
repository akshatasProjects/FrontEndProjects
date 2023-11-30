// Random Color Generator

const randomColor = function () {
  const HexCode = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += HexCode[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalRef;
const startChangingColor = function () {
  if (!intervalRef) {
    intervalRef = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalRef);
  intervalRef = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
