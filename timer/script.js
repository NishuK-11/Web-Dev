let intervalId = null;

function updateClockHands() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hrs = now.getHours();

  const secDeg = sec * 6;
  const minDeg = min * 6 + sec * 0.1;
  const hrsDeg = (hrs % 12) * 30 + min * 0.5;

  document.querySelector('.sec').style.transform = `rotate(${secDeg}deg)`;
  document.querySelector('.min').style.transform = `rotate(${minDeg}deg)`;
  document.querySelector('.hrs').style.transform = `rotate(${hrsDeg}deg)`;
}

function startClock() {
  if (intervalId) return;
  updateClockHands();
  intervalId = setInterval(updateClockHands, 1000);
}

function stopClock() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetClock() {
  stopClock();
  document.querySelector('.sec').style.transform = `rotate(0deg)`;
  document.querySelector('.min').style.transform = `rotate(0deg)`;
  document.querySelector('.hrs').style.transform = `rotate(0deg)`;
}
