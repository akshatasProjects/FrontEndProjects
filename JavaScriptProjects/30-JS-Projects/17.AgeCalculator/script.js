const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    let age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currDate.getFullYear() - birthdayDate.getFullYear();
  const month = currDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

btnEl.addEventListener("click", calculateAge);
