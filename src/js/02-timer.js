import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const startBtn = document.querySelector("[data-start]");
const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");
const divTimer = document.querySelector(".timer");
const divField = document.querySelectorAll(".field");
const spanValue = document.querySelectorAll(".value");

startBtn.style.padding = "3px 10px";
divTimer.style.display = "flex";
divTimer.style.marginTop = "10px";
divTimer.style.gap = "20px";

divField.forEach((divElement) => {
  divElement.style.display = "flex";
  divElement.style.flexDirection = "column";
  divElement.style.alignItems = "center";
  divElement.style.backgroundColor = "#5086C1";
  divElement.style.color = "#FFFFFF";
  divElement.style.padding = "5px";
  divElement.style.borderRadius = "4px";
});

spanValue.forEach((spanElement) => {
  spanElement.style.fontSize = "50px";
});

let intervalId = null;
let finalDate = null;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      Notiflix.Notify.failure("Please choose a date in the future");
    } else {
      startBtn.disabled = false;
      finalDate = selectedDate;
    }
  },
};

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  intervalId = setInterval(function () {
    let currentDate = new Date();
    let diffMs = finalDate - currentDate;
    let objDifference = convertMs(diffMs);
    if (objDifference.days < 0 && objDifference.hours < 0 &&
      objDifference.minutes < 0 && objDifference.seconds < 0) {
      daysElement.textContent = "00";
      hoursElement.textContent = "00";
      minutesElement.textContent = "00";
      secondsElement.textContent = "00";
      clearInterval(intervalId);
    } else {
      const addLeadingZero = (value) => {
        return value.toString().padStart(2, '0');
      };
      daysElement.textContent = addLeadingZero(objDifference.days);
      hoursElement.textContent = addLeadingZero(objDifference.hours);
      minutesElement.textContent = addLeadingZero(objDifference.minutes);
      secondsElement.textContent = addLeadingZero(objDifference.seconds);
    }
  }, 1000);
});