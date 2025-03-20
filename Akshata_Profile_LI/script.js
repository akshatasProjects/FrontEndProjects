// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Filter Projects
filterObjects("all");

function filterObjects(c) {
  let boxEle, i;
  // x = box
  boxEle = document.getElementsByClassName("box");
  if (c == "all") c = " ";
  for (i = 0; i < boxEle.length; i++) {
    removeClass(boxEle[i], "show");
    if (boxEle[i].className.indexOf(c) > -1) addClass(boxEle[i], "show");
  }
}

function addClass(element, nameOfclass) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = nameOfclass.split(" ");

  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, nameOfclass) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = nameOfclass.split(" ");

  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }

  element.className = arr1.join(" ");
}
