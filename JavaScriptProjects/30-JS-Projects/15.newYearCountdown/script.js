const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

updateCountDown();
function updateCountDown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hours = minute * 60;
  const day = hours * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hours);
  const m = Math.floor((gap % hours) / minute);
  const s = Math.floor((gap % minute) / second);

  dayEl.innerText = d;
  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;

  setTimeout(updateCountDown, 1000);
}

// 5:28
