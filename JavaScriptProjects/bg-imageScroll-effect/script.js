const bgImageEle = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgImageEle.style.opacity = 1 - window.pageYOffset / 800;
  //   background-size: 160% (zoomin and out);
  bgImageEle.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
  console.log(Math.floor(window.pageYOffset));
}
