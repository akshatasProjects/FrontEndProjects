const navEle = document.querySelector("nav");
const navbarLinks = navEle.querySelectorAll("a");
const secEle = document.querySelectorAll("section");

const removeActiveLinks = () => {
  navbarLinks.forEach((link) => link.parentElement.classList.remove("active"));
};

const hideSections = () => {
  secEle.forEach((secItem) => secItem.classList.add("hidden"));
};

navbarLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", () => {
    removeActiveLinks();
    hideSections();
    tabLink.parentElement.classList.add("active");
    const sectionEle = document.querySelector(tabLink.hash);
    sectionEle.classList.remove("hidden");
  });
});
