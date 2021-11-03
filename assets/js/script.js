// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Create variable that captures users response to pw length
  var passwordLength = Number(
    window.prompt(
      "How long do you want the password to be? (between 8-128 characters)"
    )
  );
//Authenticates users answer to make sure its a number between 8-128
  if (
    passwordLength === "" ||
    passwordLength === "null" ||
    passwordLength > 128 ||
    passwordLength < 8
  ) {
    //reminds user of the parameters and then goes back to the original prompt
    window.alert("Please enter a value between 8 and 128");
    return writePassword();
  } else { 
    //If response is valid, use it in creating an array of that length, which will become the pw
    var password = Array.from({ length: passwordLength }, () =>
      Math.floor(Math.random() * 100)
    );
    //variable that targets text box
    var passwordText = document.querySelector("#password");
    //displays the pw in the text box
    passwordText.value = password;
  }

 // var password = generatePassword();

  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
