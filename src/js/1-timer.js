import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const timer = document.querySelector(".timer")
setInterval(() => {
    const data = new Date;
    const timerDays = document.querySelector("[data-days]");
    const timerHours = document.querySelector("[data-hours]");
    const timerMinutes = document.querySelector("[data-minutes]");
    const timerSeconds = document.querySelector("[data-seconds]");
    timerDays.textContent = data.getDate();
    timerHours.textContent = data.getHours();
    timerMinutes.textContent = data.getMinutes();
    timerSeconds.textContent = data.getSeconds();
    
}, 1000);






