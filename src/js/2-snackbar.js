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
    const delay = Number(formInput.value);
    const state = form.elements.state.value; 

    const promise = new Promise((resolve, reject) => {
        if (state === 'fulfilled') {
            setTimeout(() => resolve(delay), delay);
        } else {
            setTimeout(() => reject(delay), delay);
        }
    });

    promise
        .then(delay => 
            iziToast.show({
                position: "topRight",
                messageColor: 'White',
                message: `✅ Promise виконано за ${delay} мс`, 
                backgroundColor: "green",
                transitionIn: "fadeIn",
                animateInside: false,
            })
        ).catch(delay => 
            iziToast.show({
                position: "topRight",
                messageColor: "white",
                message: `❌ Promise відхилено за ${delay} мс`, 
                backgroundColor: "#CC0000",
                transitionIn: "fadeIn",
                animateInside: false,
            })
        );
}
