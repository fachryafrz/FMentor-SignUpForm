const form = document.querySelector("form");

const firstName = document.querySelector("input#firstname"),
  lastName = document.querySelector("input#lastname"),
  email = document.querySelector("input#email"),
  password = document.querySelector("input#password");

const input = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  input.forEach((input) => {
    const errorIcon = input.parentElement.querySelector(".error-icon");
    const errorMessage =
      input.parentElement.parentElement.querySelector(".error-message");

    if (input.value == "") {
      input.classList.replace("input", "input-invalid");
      errorIcon.classList.remove("opacity-0");
      errorMessage.classList.remove("hidden");
      errorMessage.textContent = input.placeholder + " cannot be empty!";
    } else {
      input.classList.replace("input-invalid", "input");
      errorIcon.classList.add("opacity-0");
      errorMessage.classList.add("hidden");
    }
  });

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const errorIcon = email.parentElement.querySelector(".error-icon");
  const errorMessage =
    email.parentElement.parentElement.querySelector(".error-message");

  if (email.value == "") {
    email.classList.replace("input", "input-invalid");
    errorIcon.classList.remove("opacity-0");
    errorMessage.classList.remove("hidden");
    errorMessage.textContent = email.placeholder + " cannot be empty";
  } else if (email.value.match(validRegex)) {
    console.log("valid email!");
  } else {
    console.log("invalid email!");
    email.classList.replace("input", "input-invalid");
    errorIcon.classList.remove("opacity-0");
    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Looks like this is not an email";
  }
});
