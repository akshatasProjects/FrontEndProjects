const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

window.addEventListener("scroll", () => {
  // 50 -- is the text margin
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});

/* 

// getting the height of the navbar
console.log(navbarEl.offsetHeight);
// top space of the bottom container
console.log(bottomContainerEl.offsetTop);
*/
