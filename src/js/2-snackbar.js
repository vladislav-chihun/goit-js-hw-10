import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const formInput = form.querySelector("input[name='delay']");
const createBtn = form.querySelector("button");
let fulfilledRadioButton = form.querySelector('input[name="state"][value="fulfilled"]');
let rejectedRadioButton = form.querySelector('input[name="state"][value="rejected"]');

form.addEventListener("submit", createPromise);

function createPromise(e) {
    e.preventDefault(); 
    const delay = formInput.value;

    const promise = new Promise((resolve, reject) => {
        if (fulfilledRadioButton.checked) {
            setTimeout(() => resolve(), delay);
        } else {
            setTimeout(() => reject(), delay);
        }
    });

    promise
        .then(() =>
            iziToast.show({
                position: "topRight",
                messageColor: 'White',
                message: `✅ Fulfilled promise in ${delay}ms`,
                backgroundColor: "green",
                transitionIn: "fadeIn",
                animateInside: false,
            })
        ).catch(() =>
            iziToast.show({
                position: "topRight",
                messageColor: "white",
                message: `❌ Rejected promise in ${delay}ms`,
                backgroundColor: "#CC0000",
                transitionIn: "fadeIn",
                animateInside: false,
            })
        );
}