///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's
var passwordEl = document.getElementById("#password");
var generateEl = document.getElementById("#generate");

var passlength = prompt("How many characters would you like your password to be?")

if (passlength < 8 || passlength > 128){
    alert("Length must be 8-128 characters")
}

if (passlength >= 8 && passlength <= 128){
var uppercase = confirm("Would you like to use uppercase letters?")
var lowercase = confirm("Would you like to use lowercase letters?")
var numbers = confirm("would you like to use numbers?")
var symbols = confirm("would you like to use special characters?")
}    

if (uppercase != true && lowercase != true && numbers != true && symbols != true){
  alert("You must select at least one character type!")

}

var resultEl = document.getElementById('password');

document.getElementById('generate').addEventListener('click', () => {	
	var hasLower = lowercase.true;
	var hasUpper = uppercase.true;
	var hasNumber = numbers.true;
	var hasSymbol = symbols.true;
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});



generateEl.addEventListener("generate", (event));{
  event.preventDefault();
}

var values = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$");

var password = (""); 
    
  for (i = 0; i <= generateEl; i++) { 
     password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
} 

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
