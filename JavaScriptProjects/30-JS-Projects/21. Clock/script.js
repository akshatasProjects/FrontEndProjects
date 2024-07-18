const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondsEl = document.querySelector(".seconds");

function updateClock() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourDeg = (hour / 12) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;

  const minuteDeg = (minutes / 60) * 360;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;

  const secondsDeg = (seconds / 60) * 360;
  secondsEl.style.transform = `rotate(${secondsDeg}deg)`;
}

setInterval(updateClock, 1000);
