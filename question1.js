const form = document.querySelector("#contactForm");

const textInput = document.querySelector("#firstName");
const error = document.querySelector(".error");

form.addEventListener("submit", inputValue);

function inputValue() {
    event.preventDefault();

    const textValue = textInput.value;

    if (inputLength(textValue) === true) {
        error.style.display = "none";
        console.log("none");
    } else {
        error.style.display ="block";
        console.log("block");
    }
}

function inputLength(value) {
    const trimmed = value.trim();

    if (trimmed.length >= 2) {
        return true;
    } else {
        return false;
    }
}