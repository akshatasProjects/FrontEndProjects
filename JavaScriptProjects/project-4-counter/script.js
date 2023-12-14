const btnAdd = document.getElementById("btnAdd");
const btnSub = document.getElementById("btnSub");
const counterDisp = document.getElementById("counterDisplay");

let total = 0;
const maxLimit = 20;

const updateCounter = () => {
  if (total > maxLimit || total < 0) {
    total = 0;
  } else {
    counterDisp.textContent = total;
    document.body.style.backgroundColor = `rgb(${
      (total / maxLimit) * 255
    },64,0)`;
  }
};

btnAdd.addEventListener("click", () => {
  total = total + 1;
  updateCounter();
});

btnSub.addEventListener("click", () => {
  total = total - 1;
  updateCounter();
});
