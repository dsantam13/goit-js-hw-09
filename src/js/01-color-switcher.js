function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyElement = document.querySelector("body");

const divButtons = document.createElement("div");
bodyElement.append(divButtons);
divButtons.append(btnStart, btnStop);
divButtons.style.display = "flex";
divButtons.style.justifyContent = "center";


let timerId = null;
btnStop.disabled = true;

function changeColor() {
  btnStart.disabled = true;
  btnStop.disabled = false;
  timerId = setInterval(() => {
    bodyElement.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

function stopChangeColor() {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(timerId);
};

btnStart.addEventListener("click", changeColor);
btnStop.addEventListener("click", stopChangeColor);