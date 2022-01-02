// Assignment Code
var generateBtn = document.querySelector("#generate");

//List of the special chars that can be used for password
var specialChars = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var nubers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var mixed = [];

function generatePassword() {
  // prompt asks how long the password will be
  var start = prompt('How many character do you want?')

  if (isNaN(start)) {
    alert("input must be a number");
    return;
  };
  if (start < 8 || start > 128) {
    alert("number must be at least 8 characters but less than 128");
    return;
  };

  var addSpecial = confirm("include special characters?");
  var addNumbers = confirm("include Numbers?");
  var addlowecase = confirm("include lowercase characters?");
  var adduppercase = confirm("include uppercase characters?");

  if (!addSpecial && !addNumbers && !addlowecase && !adduppercase) {
    alert("must select at least one");
    return;
  }

  if (addSpecial === true) {
    var choices = mixed.push(specialChars);
  }
  if (addNumbers === true) {
    var choices = mixed.push(nubers);
  }
  if (addlowecase === true) {
    var choices = mixed.push(lowerCase);
  }
  if (adduppercase === true) {
    var choices = mixed.push(upperCase);
  }

  // check progress
  // console.log("mixed " + mixed);
  // console.log("choices " + choices);
  // console.log("password lenght " + start);

  var possiblePassword = [];

  if (mixed.includes(specialChars)) {
    var possiblePassword = possiblePassword.concat(specialChars);
  }
  if (mixed.includes(nubers)) {
    var possiblePassword = possiblePassword.concat(nubers);
  }
  if (mixed.includes(lowerCase)) {
    var possiblePassword = possiblePassword.concat(lowerCase);
  }
  if (mixed.includes(upperCase)) {
    var possiblePassword = possiblePassword.concat(upperCase);
  }
  console.log(`possiblePassword : ${possiblePassword}`);
  var partialPassword = [];
  var finalPassword = [];
  for (var i = 0; i < start; i++) {
    var partialPassword = possiblePassword[Math.floor(Math.random() * possiblePassword.length)];
    finalPassword = finalPassword.concat(partialPassword);
  }

  console.log(partialPassword, i);
  console.log(finalPassword.join(""));

  return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
