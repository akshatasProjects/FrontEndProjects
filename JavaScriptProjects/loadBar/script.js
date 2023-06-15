const counterEle = document.querySelector(".counter");
const barFrontEle = document.querySelector(".loading-bar-front");

let percentIndex = 0;
updateIndex();

function updateIndex() {
  counterEle.innerHTML = percentIndex + "%";
  barFrontEle.style.width = percentIndex + "%";
  percentIndex++;
  if (percentIndex <= 100) {
    setTimeout(updateIndex, 130);
  }
}
