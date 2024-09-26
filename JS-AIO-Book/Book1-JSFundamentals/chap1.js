const ball = document.getElementById("ball");
let position = 0;
document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  if (event.code === "ArrowLeft") {
    position = position - 10;
  }

  if (event.code === "ArrowRight") {
    position = position + 10;
  }

  if (position < 10) {
    position = 0;
  }
  refresh();
}

function refresh() {
  ball.style.left = position + "px";
  document.getElementById("demo").innerHTML = position;
}
