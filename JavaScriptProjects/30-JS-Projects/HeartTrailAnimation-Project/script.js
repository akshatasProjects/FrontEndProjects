const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEle = document.createElement("span");
  spanEle.style.left = xPos + "px";
  spanEle.style.top = yPos + "px";
  bodyEl.appendChild(spanEle);

  // creating a different size using random
  const size = Math.random() * 100;
  spanEle.style.width = size + "px";
  spanEle.style.height = size + "px";

  setTimeout(() => {
    spanEle.remove();
  }, 3000);
});
