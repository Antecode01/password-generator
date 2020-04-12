// Assignment Code
var generateBtn = document.querySelector("#generate");

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// function getRandomSymbol() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// console.log(getRandomNumber());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var numberOfChar = prompt(
    "How many characters would you want? Please choose between 8 and 128"
  );
  if (numberOfChar < 8 || numberOfChar > 128) {
    alert("please choose between 8 and 128");
  } else {
    var uppercaseQUestion = confirm("Do you want uppercase character?s");
    var lowercaseQUestion = confirm("Do you want lowercase characters?");
    var numberQUestion = confirm("Do you want numbers?");
    var specialQUestion = confirm("Do you want special characters");

    var uppercase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
    var lowercase = "qwertyuioplkjhgfdsazxcvbnm";
    var numbers = "1234567890";
    var specialChar = "!@#$%^&*()";

    var selectedChars = [];
    if (uppercaseQUestion === true) {
      for (var i = 0; i < uppercase.length; i++) {
        selectedChars.push(uppercase[i]);
      }
    }
    if (lowercaseQUestion === true) {
      for (var j = 0; j < lowercase.length; j++) {
        selectedChars.push(lowercase[j]);
      }
    }
    if (numberQUestion === true) {
      for (var t = 0; t < numbers.length; t++) {
        selectedChars.push(numbers[t]);
      }
    }
    if (specialQUestion === true) {
      for (var b = 0; b < specialChar.length; b++) {
        selectedChars.push(specialChar[b]);
      }
    }
    var finalResult = [];
    for (var p = 0; p < numberOfChar; p++) {
      finalResult.push(
        selectedChars[Math.floor(Math.random() * selectedChars.length)]
      );
    }
    console.log(finalResult);
    return finalResult.join("");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
