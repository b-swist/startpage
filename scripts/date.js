const padNumber = (num) => num.toString().padStart(2, "0");

function showTime() {
  const d = new Date();
  const h = padNumber(d.getHours());
  const m = padNumber(d.getMinutes());
  const s = padNumber(d.getSeconds());

  const time = h + ":" + m + ":" + s;

  document.getElementById("clock").textContent = time;
}

setInterval(showTime, 1000);

showTime();
