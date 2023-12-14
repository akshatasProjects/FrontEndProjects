const btnEle = document.getElementById("new-colour-button");
const spanEle = document.getElementById("current-colour");

const HexCode = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomValue() {
  const randomIndex = Math.floor(Math.random() * HexCode.length);
  const randomCode = HexCode[randomIndex];

  return randomCode;
}

function getRandomStr() {
  let hexString = "";
  for (let i = 0; i < 6; i++) {
    hexString += getRandomValue();
  }
  return hexString;
}

btnEle.addEventListener("click", () => {
  const randomHexString = "#" + getRandomStr();

  document.body.style.backgroundColor = randomHexString;
  spanEle.textContent = randomHexString;
});
