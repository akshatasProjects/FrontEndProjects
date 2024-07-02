const containerEl = document.querySelector(".container");

const career = ["Clay Artist", "Freelancer", "Web Developer"];
let careerIndex = 0;
let charaterIndex = 0;

updateText();

function updateText() {
  charaterIndex++;
  containerEl.innerHTML = `<h1>I am a ${career[careerIndex].slice(
    0,
    charaterIndex
  )}</h1>`;

  if (charaterIndex === career[careerIndex].length) {
    careerIndex++;
    charaterIndex = 0;
  }

  if (careerIndex === career.length) {
    careerIndex = 0;
  }

  setTimeout(updateText, 400);
}
