// select body and buttons
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// loop on each buttons
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    // console.log(event);
    // console.log(event.target);
    // get the id of the button selected and change the background color according to that

    if (event.target.id === "grey") {
      body.style.backgroundColor = event.target.id;
    }

    if (event.target.id === "white") {
      body.style.backgroundColor = event.target.id;
    }

    if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
    }

    if (event.target.id === "yellow") {
      body.style.backgroundColor = event.target.id;
    }
  });
});
