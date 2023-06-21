let today = new Date();
let day = today.getDay();
let dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
document.write(`Today is ${dayList[day]} `);

let hour = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let prepand = hour >= 12 ? "PM" : "AM";

hour = hour >= 12 ? hour - 12 : hour;

if (hour === 0 && prepand === "PM") {
  if (minutes === 0 && seconds === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}

if (hour === 0 && prepand === "AM") {
  if (minutes === 0 && seconds === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    prepand = "AM";
  }
}

document.write(`Current Time is : ${hour}${prepand} : ${minutes} : ${seconds}`);
