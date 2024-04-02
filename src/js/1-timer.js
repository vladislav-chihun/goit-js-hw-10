import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let countdownDate;
const btn = document.querySelector("[data-start]");
btn.setAttribute('disabled', "");

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function (selectedDates) {
    const currentDate = new Date();
    const selectedDate = selectedDates[0]
    if (selectedDate >= currentDate) {
      btn.removeAttribute('disabled');
      countdownDate = selectedDate;
    } else {
      window.alert("Please choose a date in the future");
    }
  }
});

btn.addEventListener("click", btnStartFoo);

function btnStartFoo() {
  btn.setAttribute('disabled', "");
  setInterval(() => {
    const now = new Date();
    convertMs(countdownDate.getTime() - now.getTime());
  }, 1000);
  convertMs(countdownDate.getTime() - new Date().getTime()); // обновляем таймер сразу после нажатия кнопки
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// не объявляем переменные заново, а просто обновляем их значения
function convertMs(ms) {
  if (ms < 0) {
    clearInterval();
    return;
  }
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  const timerDays = document.querySelector("[data-days]");
  const timerHours = document.querySelector("[data-hours]");
  const timerMinutes = document.querySelector("[data-minutes]");
  const timerSeconds = document.querySelector("[data-seconds]");
  timerDays.textContent = days;
  timerHours.textContent = hours;
  timerMinutes.textContent = minutes;
  timerSeconds.textContent = seconds;
}
