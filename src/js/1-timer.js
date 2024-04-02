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
            return
        } else {
            window.alert("Please choose a date in the future");
    }
    
  }
});
btn.addEventListener("click", btnStartFoo)
function btnStartFoo() {
    const now = new Date();
    const ms = countdownDate.getTime() - now.getTime();
    btn.setAttribute('disabled', "");

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

console.log(convertMs(ms));


}

