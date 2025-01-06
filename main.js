document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById("form");
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const email = document.getElementById("email-address");
    const radioButtons = document.getElementsByName('radio-btn');
    const message = document.getElementById("message-area");
    const consentCheckbox = document.getElementById('checkbox-btn');
    const successMessage = document.getElementById("success-message");


    // helper function
    const showError = (input, message) => {
        const hint = input.parentElement.querySelector(".input-hint");
        hint.textContent = message;
        hint.style.display = message ? "block" : "none";

        if (message) {
            input.classList.add("error-state");
        } else {
            input.classList.remove("error-state");
        }
    };

    const validateTextInput = (input) => {
        if (input.value.trim() === '') {
            showError(input, "This field is required.");
            return false;
        }
        showError(input, '');
        return true;
    }

    const validateEmail = (input) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value.trim())) {
            showError(input, "Please enter a valid email address.")
        } else if (input.value.trim() === '') {
            showError(input, "This field is required.")
            return false;
        }
        showError(input, '');
        return true;
    }

    const validateRadioButtons = () => {
        const selected = Array.from(radioButtons).some((radio) => radio.checked);
        const hint = document.querySelector('.query-alert-message');
        if (!selected) {
            hint.style.display = 'block';
            return false;
        } 
        hint.style.display = 'none';
        return true;
    };

    const validateTextArea = (input) => {
        if (input.value.trim() === '') {
            showError(input, 'This field is required.');
            return false;
        }
        showError(input, '');
        return true;
    }

    const validateCheckbox = (input) => {
        const hint = document.querySelector('.consent-error-message');
        if (!input.checked) {
            hint.style.display = 'block';
            return false;
        }
        hint.style.display = 'none';
        return true;
    }

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const isFirsNameValid = validateTextInput(firstName);
        const isLastNameValid = validateTextInput(lastName);
        const isEmailValid = validateEmail(email);
        const isQueryTypeValid = validateRadioButtons();
        const isMessageValid = validateTextArea(message);
        const isConsentValid = validateCheckbox(consentCheckbox);

        if (
            isFirsNameValid &&
            isLastNameValid &&
            isEmailValid &&
            isQueryTypeValid &&
            isMessageValid &&
            isConsentValid 
        ) {
            successMessage.classList.add('active');
        }
    });
});