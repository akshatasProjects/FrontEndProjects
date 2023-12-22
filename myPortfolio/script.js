function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menuLinks.classList.toggle("open");
  icon.classList.toggle("open");
}
