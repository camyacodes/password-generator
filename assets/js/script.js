// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = Number(
    window.prompt(
      "How long do you want the password to be? (between 8-128 characters)"
    )
  );

  if (
    passwordLength === "" ||
    passwordLength === "null" ||
    passwordLength > 128 ||
    passwordLength < 8
  ) {
    window.alert("Please enter a value between 8 and 128");
    return writePassword();
  }

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
