const containerEl = document.querySelector(".container");
const textArr = ["Frontend Developer", "Freelancer", "Email Developer"];
let arrIndex = 0;
let characterIndex = 0;
updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1>I am  ${
    textArr[arrIndex].slice(0, 1) === "E" ? "An" : "A"
  } ${textArr[arrIndex].slice(0, characterIndex)}</h1>`;

  /* containerEl.innerHTML = `<h1>I am a ${textArr[arrIndex].slice(
      0,
      characterIndex
    )}</h1>`;*/
  if (characterIndex === textArr[arrIndex].length) {
    arrIndex++;
    characterIndex = 0;
  }

  if (arrIndex === textArr.length) {
    arrIndex = 0;
  }
  setTimeout(updateText, 400);
}
