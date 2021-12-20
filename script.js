// Assignment Code
var generateBtn = document.querySelector("#generate");

// to randomize the selection try to concat the arrays and use for loop to select from the options
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin"];
// const children = arr1.concat(arr2,arr3);

//  random choices
// var random = choices[Math.floor(Math.random() * choices.length)];

//List of the special chars that can be used for password
// var specialChars = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
// var nubers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChars = ['special'];
var nubers = ["numbers"];
var lowerCase = ["lower case"];
var upperCase = ["upper case"];


var mixed = [];

function generatePassword() {
  // prompt asks how long the password will be
  var start = prompt('How many character do you want?')

  if (isNaN(start)) {
    console.log("Invalid")
    return;
  };
  var addSpecial = confirm("include special characters?")
  var addNumbers = confirm("include Numbers?")
  var addlowecase = confirm("include lowercase characters?")
  var adduppercase = confirm("include uppercase characters?")

  //all choices
  // if skip a choice it  still shows up in the mixed arrary
  //need to debug
  if (addSpecial, addNumbers, addlowecase, adduppercase) {
    var choices = mixed.concat(specialChars, nubers, lowerCase, upperCase);
  } else if (addNumbers, addlowecase, adduppercase) {
    var choices = mixed.concat(nubers, lowerCase, upperCase);
  } else if (addlowecase, adduppercase) {
    var choices = mixed.concat(lowerCase, upperCase);
  } else if (adduppercase) {
    var choices = mixed.concat(upperCase);
  } else if (addSpecial, addNumbers, addlowecase) {
    var choices = mixed.concat(specialChars, nubers, lowerCase);
  } else if (addSpecial, addNumbers) {
    var choices = mixed.concat(specialChars, nubers);
  } else if (addSpecial) {
    var choices = mixed.concat(specialChars);
  } else if (addNumbers, addlowecase) {
    var choices = mixed.concat(nubers, lowerCase);
  } else if (addNumberse) {
    var choices = mixed.concat(nubers);
  } else if (addlowecase) {
    var choices = mixed.concat(lowerCase);
  } else if (addSpecial, !addNumbers, addlowecase, !adduppercase) {
    var choices = mixed.concat(specialChars, lowerCase);
  } else if (addNumbers, adduppercase) {
    var choices = mixed.concat(nubers, upperCase);
  }

  console.log(choices)


  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

