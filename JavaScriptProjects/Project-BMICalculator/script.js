// select form as it has all the elements

const form = document.querySelector("form");

// add event to form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the user entered values of height and weight
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please provide a valid height :${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please provide a valid height :${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi}</span> You are underweight`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `<span>${bmi}</span> Your weight is Normal`;
    } else if (bmi > 24.9) {
      result.innerHTML = `<span>${bmi}</span> You are over weight`;
    }
  }
  // Assignment
  //   display the message depending upon the bmi result
  //   Under Weight = Less than 18.6
  // Normal Range = 18.6 and 24.9
  // Overweight = Greater than 24.9
});
