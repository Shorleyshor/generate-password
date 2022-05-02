// user variables:
var enter;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmSpecial;

// Assignment Code

number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
special = ["!", "#", "$", "%", "&", "(", ")", "'", "*", "+", "-", ".", "/", ";", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// 01 prompt the user for the password criteria

//output are declared outside if statement

var output;

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  password = generatePassword();
  document.getElementById('password').placeholder = password
});

// 02 password lenght 8<128

function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your password? Enter a number between 8 and 128"));

  if (!enter) {
    alert("This needs a value");
} else if (enter < 8 || enter > 128) {
  enter = parseInt(prompt("You must choose a password lenght between 8 and 128"));

  // 03 validate the input
} else {
  confirmNumber = confirm("Will this contain Numbers?")
  confirmSpecial = confirm("Will this contain SpecialCharacters");
  confirmUppercase = confirm("Will this contain Uppercase Letters?");
  confirmLowercase = confirm("Will this contain Lowercase Letters?");




