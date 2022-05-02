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

};
// 04 generate password based on criteria

if (!confirmNumber && !confirmSpecial && !confirmUppercase && !confirmLowercase) {
  output = alert("You must choose a criteria!");
}
  else if (confirmUppercase && confirmLowercase && confirmNumber && confirmSpecial) {
    output = special.concat(number, uppercase, lowercase);
  }
//for 3 options
else if (confirmSpecial && confirmLowercase && confirmNumber ) {
  output = special.concat(lowercase, number)
}
else if (confirmSpecial && confirmNumber && confirmUppercase) {
  output = special.concat(number, uppercase)
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  output = number.concat(uppercase, lowercase)
}
else if (confirmSpecial && confirmLowercase && confirmUppercase) {
  output = special.concat(uppercase, lowercase)
}
// for two output
else if (confirmNumber && confirmSpecial) {
  output = number.concat(special)
}
else if (confirmNumber && confirmUppercase) {
  output = number.concat(uppercase)
}
else if (confirmNumber && confirmLowercase) {
  output = number.concat(lowercase)
}
else if (confirmLowercase && confirmUppercase) {
  output = lowercase.concat(uppercase)
}
else if (confirmLowercase && confirmSpecial) {
  output = lowercase.concat(special)
}
else if (confirmSpecial && confirmUppercase) {
  output = special.concat(uppercase)
}
// for one output
else if (confirmLowercase) {
  output = lowercase;
}
else if (confirmNumber) {
  output = number
}
else if (confirmSpecial) {
  output = special;
}
else if (confirmUppercase) {
  output = uppercase
}
// 05 displaypassword based on criteria.

var password = [];
 
//random selection
for ( var i = 0; i < enter; i++) {
  var chooseoutput = output[Math.floor(Math.random() * output.length)];
  password.push(chooseoutput);
}
return password
}


