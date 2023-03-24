import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
let selectedDate = null;
let time = null;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
        //   window.alert("Please choose a date in the future")
            Notiflix.Notify.warning('Please choose a date in the future');
        }

        if (selectedDates[0] > new Date()) {
            startBtn.disabled = false;
            selectedDate = selectedDates[0]
            
        }
    },
};
flatpickr(inputDate, options)

startBtn.addEventListener('click', resultTime);

function resultTime() {
    time = setInterval(() => {
        let differenceTime = selectedDate - new Date()
        let result = convertMs(differenceTime)

        if (differenceTime <= 0) {
            clearInterval(time);
            // window.alert('Time is over')
            Notiflix.Notify.success('Time is over');
        }
        renderingOutTime(result)
        // console.log(result)
    }, 1000);
}
  
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function renderingOutTime(result) {
    days.textContent = addLeadingZero(result.days)
    hours.textContent = addLeadingZero(result.hours)
    minutes.textContent = addLeadingZero(result.minutes)
    seconds.textContent = addLeadingZero(result.seconds)
}

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