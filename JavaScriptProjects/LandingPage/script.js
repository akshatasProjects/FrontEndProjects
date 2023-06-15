const ACTIVE_CLASS = "active";
const IMAGES = document.querySelectorAll(".slider");

IMAGES[0].classList.add(ACTIVE_CLASS);

function removeActiveClass() {
  const ele = document.querySelector(`.${ACTIVE_CLASS}`);
  if (ele) {
    ele.classList.remove(ACTIVE_CLASS);
  }
}

// check all these methods of JS
function addClass($event) {
  $event.stopPropogation();
  removeActiveClass();
  const target = $event.currentTarget;
  target.classList.add(ACTIVE_CLASS);
}

IMAGES.forEach((image) => {
  image.addEventListener("click", addClass);
});
