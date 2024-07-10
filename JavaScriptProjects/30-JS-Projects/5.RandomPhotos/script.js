const container = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imgNum = 10;
  addNewImages();
});

function addNewImages() {
  for (let i = 0; i < imgNum; i++) {
    let num = Math.floor(Math.random() * 2000);
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${num}`;
    container.appendChild(newImgEl);
  }
}
