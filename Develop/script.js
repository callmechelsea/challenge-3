var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Choose a password length (between 8 and 128 characters):");
  
  // Decide on a length for your password
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please choose a length between 8 and 128 characters.");
    return; // 
  }
  
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");
  
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return; // 
  }
  
  var password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  var chars = "";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  
  // Characters
  if (includeLowercase) {
    chars += lowercaseChars;
  }
  
  if (includeUppercase) {
    chars += uppercaseChars;
  }
  
  if (includeNumeric) {
    chars += numericChars;
  }
  
  if (includeSpecial) {
    chars += specialChars;
  }
  
  var passwordResult = '';
  for (var i = 0; i < passwordLength; i++) {
    passwordResult += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return passwordResult;
}

generateBtn.addEventListener("click", writePassword);
