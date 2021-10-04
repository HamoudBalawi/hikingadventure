const form = document.querySelector("#form");
const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");

function formValidation() {
    console.log("madani")
  event.preventDefault();
  if (checkLength(name.value, 0)) {
    nameerror.style.display = "none";
  } else {
    nameerror.style.display = "block";
  }
  if (checkNumber(phone.value)) {
    phoneerror.style.display = "none";
  } else {
    phoneerror.style.display = "block";
  }

  if (emailValidation(email.value)) {
    emailerror.style.display = "none";
  } else {
    emailerror.style.display = "block";
  }
  if (checkLength(message.value, 19)) {
    messageerror.style.display = "none";
  } else {
   messageerror.style.display = "block";
  }
  if (checkLength(name.value, 0) && checkNumber(phone.value) && emailValidation(email.value) && checkLength(message.value, 19)) {
    form.reset();
    setTimeout(() => {
      success.style.display = "block";
    }, 1000);
    setTimeout(() => {
        success.style.display = "none";
      }, 4000);
  } else {
    success.style.display = "none";
   
  }
}

form.addEventListener("submit", formValidation);

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}
function checkNumber(phone) {
  let regex = /^[\d,\s,\+,\-]{8,10}/;
  const numberMatches = regex.test(phone);
  return numberMatches;
}