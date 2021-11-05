// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var alpha = ["A", "B", "C", "D", "E", "F", "G"];

// Write password to the #password input
function writePassword() {
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
    return writePassword();
  }
  //Include NUMBERS?
  var includeNumbers = window.prompt(
    "Would you like your password to include NUMBERS? Enter YES or NO to continue."
  );
  //Include UPPERCASE letters?
  var includeUpper = window.prompt(
    "Would you like your password to include UPPERCASE letters? Enter YES or NO to continue."
  );
   //Include LOWERCASE letters?
  var includeLower = window.prompt(
    "Would you like your password to include LOWERCASE letters? Enter YES or NO to continue."
  );
   //Include SPECIAL CHARARCTERS?
  var includeSpecial = window.prompt(
    "Would you like your password to include SPECIAL CHARACTERS? Enter YES or NO to continue."
  );
  // else {
    //If response is valid, use it in creating an array of that length, which will become the pw
   // var password = passwordLength;
    //variable that targets text box
    //var passwordText = document.querySelector("#password");
    //displays the pw in the text box
    //passwordText.value = password;
  //}

  // var password = generatePassword();

  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
