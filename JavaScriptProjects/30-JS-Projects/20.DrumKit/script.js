const kits = ["crash", "kick", "snare", "tom"];
const conatinerEl = document.querySelector(".container");

kits.forEach((kit) => {
  // Creating button and appending
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = kit;
  conatinerEl.appendChild(btnEl);

  // Creating audio element and appending
  const audioEl = document.createElement("audio");
  audioEl.src = "Music/" + kit + ".mp3";
  conatinerEl.appendChild(audioEl);

  btnEl.addEventListener("click", () => {
    audioEl.play();
  });

  // adding event on keypress from keyboard C,K,S,T
  window.addEventListener("keydown", (event) => {
    if (event.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = "scale(.9)";
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});
