const searchBarEl = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
  searchBarEl.classList.toggle("active");
});
