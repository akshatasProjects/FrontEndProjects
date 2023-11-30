document.querySelector("#Images").addEventListener(
  "click",
  function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
      let removeImg = e.target.parentNode;
      removeImg.remove();
    }
  },
  false
);
