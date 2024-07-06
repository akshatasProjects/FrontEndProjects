const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const dateData = new Date();
const month = dateData.getMonth();
const day = dateData.getDay();
// Month to convert in text
monthNameEl.innerText = dateData.toLocaleString("en", {
  month: "long",
});

// Day to convert in String
dayNameEl.innerText = dateData.toLocaleString("en", {
  weekday: "long",
});

dayNumberEl.innerText = dateData.getDate();
yearEl.innerText = dateData.getFullYear();
