const btnElement = document.querySelector("button");
const spanElement = document.querySelector("span");

btnElement.addEventListener("click", () => {
  const result = prompt("Please Enter your Name");
  spanElement.textContent = result;
});
