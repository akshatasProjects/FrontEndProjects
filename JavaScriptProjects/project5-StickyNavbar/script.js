const navbarEle = document.querySelector("nav");
const navLinks = navbarEle.querySelectorAll("a");

const navPosition = navbarEle.getBoundingClientRect().top;
console.log(navPosition);

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  console.log(scrollPosition + "px");
  navbarEle.style.top = scrollPosition + "px";

  //checking for each link
  navLinks.forEach((links) => {
    const secEle = document.querySelector(links.hash);
    const offsetVal = 50;
    if (
      scrollPosition + offsetVal > secEle.offsetTop &&
      scrollPosition + offsetVal < secEle.offsetTop + secEle.offsetHeight
    ) {
      links.classList.add("active");
    } else {
      links.classList.remove("active");
    }
  });
});
