// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
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
    return writePassword();
  }

  //Include NUMBERS?
  var includeNumbers = window.prompt(
    "Would you like your password to include NUMBERS? Enter YES or NO to continue."
  );

  /*if (includeNumbers === "YES") {
    for (let i = 0; i<passwordLength; i++) {
      password += Math.floor(Math.random()*10);
    }
  }*/
  //Include UPPERCASE letters?
  var includeUpper = window.prompt(
    "Would you like your password to include UPPERCASE letters? Enter YES or NO to continue."
  );

  if (includeUpper==="YES"){
    var ALPHA = ['A','B','C','D','E','F','G','H','I'];
    for (let i = 0; i<passwordLength;i++){
      password += ALPHA[Math.floor(Math.random()*9)]
    }
  }
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

  //var password = generatePassword();

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
