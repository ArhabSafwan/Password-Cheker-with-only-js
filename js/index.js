let inputPassword = document.querySelector(".input-password");
let textOutput = document.querySelector(".text-output");

//CHECK PASSWORD ON INPUT
inputPassword.addEventListener("input", function () {
  let str = inputPassword.value;

  let hasSymbol = containSymbol(str);
  let hasUpper = isUpper(str);
  let hasNumber = num(str);
  let hasLower = isLower(str);

  if (str == "") {
    textOutput.innerHTML = "Fill the password";
  } else if (str.length <= 8) {
    textOutput.innerHTML = "password is too short";
  } else if (!hasSymbol) {
    textOutput.innerHTML = "password must have a special char";
  } else if (!hasUpper) {
    textOutput.innerHTML = "password need a upper case letter";
  } else if (!hasNumber) {
    textOutput.innerHTML = "password must contain a numerical value";
  } else if (!hasLower) {
    textOutput.innerHTML = "password must contain a lower case";
  } else {
    textOutput.innerHTML = "password is strong";
  }
});

// ALL FUNCTIONS

function containSymbol(str) {
  //bring all the symbol
  const symbol = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return symbol.test(str);
}

function isUpper(str) {
  //calling regex
  return /[A-Z]/.test(str);
}

function num(str) {
  //calling regex
  return /[0-9]/.test(str);
}

function isLower(str) {
  return /[a-z]/.test(str);
}
