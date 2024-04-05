import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let countdownDate;
const btn = document.querySelector("[data-start]");
const input = document.querySelector("#datetime-picker")
btn.setAttribute('disabled', "");

let intervalId;

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
      iziToast.error({
        position: "topRight",
        messageColor: 'White',
        message: "❌ Please choose a date in the future",
        backgroundColor: "#CC0000",
        transitionIn: "fadeIn",
        animateInside: false,
      })
    }
  }
});

btn.addEventListener("click", btnStartFoo);

function btnStartFoo() {
  btn.setAttribute('disabled', "");
  input.setAttribute('disabled', "");
  
  intervalId = setInterval(() => {
    const now = new Date();
    convertMs(countdownDate.getTime() - now.getTime());
  }, 1000);
}

function convertMs(ms) {
  if (ms <= 0) {
    clearInterval(intervalId);
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

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
