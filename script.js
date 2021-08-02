// looks for generate button on html //
var generateBtn = document.querySelector("#generate");

// select characters for password //
(getRandomLowerCase) => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

(getRandomUpperCase) => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

(getRandomNumbers) => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

(getRandomSpecialCharacters) => {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
};

// creates an object to store characters //
(storeCharacters) = {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumbers,
  special: getRandomSpecialCharacters,
};

// sets the variable for the generatePassword function //





// asks user for desired length of password //
passwordLength = prompt(
  "How many characters do you want to include in your password?  Enter a number between 8 - 128.",
  ""
);



















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
