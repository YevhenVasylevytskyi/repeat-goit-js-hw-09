const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body

// console.log(start)

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

let bgcId = null;
stopBtn.disabled = true;

function onStart() {
    bgcId = setInterval(() => {
        const color = getRandomHexColor()
        body.style.backgroundColor = color
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }, 1000);
}

function onStop() {
    clearInterval(bgcId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}