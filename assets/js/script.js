//target html button and text box
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function generatePassword() {
  //create password variable as an empty string
  var password = "";
  //Create variable that captures users response to pw length
  var passwordLength = Number(
    window.prompt(
      "How long do you want the password to be? (Enter a number between 8-128 characters)"
    )
  );
  //Authenticates users answer to make sure its a number between 8-128
  if (
    passwordLength === "" ||
    passwordLength === "null" ||
    passwordLength > 128 ||
    passwordLength < 8 ||
    Number.isNaN(passwordLength) === true
  ) {
    //reminds user of the parameters and then goes back to the original prompt
    window.alert("Please enter a number between 8 and 128");
    return generatePassword();
  }

  //Include NUMBERS?
  var includeNumbers = window.confirm(
    "Would you like your password to include NUMBERS?"
  );
  //Include UPPERCASE letters?
  var includeUpper = window.confirm(
    "Would you like your password to include UPPERCASE letters?"
  );
  //Include LOWERCASE letters?
  var includeLower = window.confirm(
    "Would you like your password to include LOWERCASE letters?"
  );
  //Include SPECIAL CHARARCTERS?
  var includeSpecial = window.confirm(
    "Would you like your password to include SPECIAL CHARACTERS?"
  );
  if (
    includeNumbers === false &&
    includeLower === false &&
    includeUpper === false &&
    includeSpecial === false
  ) {
    window.alert("Please choose at least one character type");
    return generatePassword();
  }
  //loop through functions based on users input to create password of set length
  for (let i = 0; i < passwordLength; i++) {
    //check conditions
    if (includeNumbers === true && password.length < passwordLength) {
      password += randNum();
    }

    if (includeUpper === true && password.length < passwordLength) {
      password += randUpp();
    }

    if (includeLower === true && password.length < passwordLength) {
      password += randLow();
    }

    if (includeSpecial === true && password.length < passwordLength) {
      password += randSpec();
    }
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

//Each pw aspect random function
function randNum() {
  return Math.floor(Math.random() * 9);
}

function randUpp() {
  ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return ALPHA[Math.floor(Math.random() * 26)];
}

function randLow() {
  alpha = "abcdefghijklmnopqrstuvwxyz";
  return alpha[Math.floor(Math.random() * 26)];
}

function randSpec() {
  specialChar = "!#$%&'()*+,-./:; <=>?@[]^_`{|}~";
  return specialChar[Math.floor(Math.random() * 30)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
