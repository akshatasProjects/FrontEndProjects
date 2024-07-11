const containerEl = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const allColorContainerEl = document.querySelectorAll(".color-container");
generateColors();

function generateColors() {
  allColorContainerEl.forEach((colorContainerEl) => {
    const newColorCode = randomColor();
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  const charHex = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * charHex.length);
    colorCode += charHex.substring(randomNum, randomNum + 1);
  }
  console.log(colorCode);
  return colorCode;
}
