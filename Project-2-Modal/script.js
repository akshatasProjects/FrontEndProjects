// select the button
const btnOpenModal = document.querySelector("#openModal");
const divModal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");

btnOpenModal.addEventListener("click", () => {
  divModal.classList.add("open");
});

modalContent.addEventListener("click", () => {
  divModal.classList.remove("open");
});
