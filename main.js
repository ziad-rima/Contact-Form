const form = document.getElementById("form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const firstName = document.getElementById("fname").value.trim();
    const lasttName = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const queryType = document.querySelector("input[name='radio-btn']:checked");
    const message = document.getElementById("message-area").value.trim();
    const consent = document.getElementById("checkbox-consent").checked;

    const inputHints = document.querySelectorAll(".input-hint");

    let isValid = true;

    if (firstName === "") {
        isValid = false; 

        document.querySelector("#fname + .input-hint").style.display = "block";
        document.querySelector("#fname").style.border = "1px solid var(--Red)";     
    } else {
        document.querySelector("#fname + .input-hint").style.display = "none";
        document.querySelector("#fname").style.border = "1px solid var(--Grey-900)";
    }

    if (lasttName === "") {
        isValid = false; 

        document.querySelector("#lname + .input-hint").style.display = "block";
        document.querySelector("#lname").style.border = "1px solid var(--Red)";     
    } else {
        document.querySelector("#lname + .input-hint").style.display = "none";
        document.querySelector("#lname").style.border = "1px solid var(--Grey-900)";
    }

    if (!isValidEmail(email)) {
        isValid = false;

        document.querySelector("#email + .input-hint").style.display = "block";
        document.querySelector("#email").style.border = "1px solid var(--Red)";
    } else {
        document.querySelector("#email").style.display = "none";
        document.querySelector("#email").style.border = "1px solid var(--Grey-900)";
    }

    if (!queryType) {
        isValid = false; 

        document.querySelector(".radio-buttons + .input-hint").style.display = "block";
    } else {
        document.querySelector(".radio-buttons + .input-hint").style.display = "none";
    }

    if (message === "") {
        isValid = false;

        document.querySelector("#message-area + .input-hint").style.display = "block";
        document.querySelector("#message-area").style.border = "1px solid var(--Red)";
    } else {
        document.querySelector("#message-area + .input-hint").style.display = "none";
        document.querySelector("#message-area").style.border = "1px solid var(--Grey-900)";
    }

    if (!consent) {
        isValid = false;

        inputHints[5].classList.add('error-state')
    } else {
        inputHints[5].classList.remove('error-state')
    }

    if (isValid) {
        successMessage.classList.add("active")
        form.reset()
    }
})

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.text(email);
}