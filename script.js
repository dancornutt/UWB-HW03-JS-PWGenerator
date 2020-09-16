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
function generatePassword() {
  //set variables
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const num = "0123456789";
  const special = ` !#$%&'()*+,-./:;<=>?@[]^_\`{|}~"`
  
  let pwLength;
  let lib = "";

  //ask user for length of password
  while (!pwLength) {
    let wantedLen = prompt("How long do you want your password? Integers only please... between 8 and 128");
    wantedLen = parseInt(wantedLen, 10);
    if (typeof wantedLen === "number" && wantedLen > 7 && wantedLen < 129) {
        pwLength = wantedLen;
        console.log("Requested length is: ", pwLength);
      }
  }
  
  //ask user for which character set to use
  if (confirm("Do you want uppercase characters?")) {
    lib += upper;
  };
  if (confirm("Do you want lowercase characters?")) {
    lib += lower;
  };
  if (confirm("Do you want numeric characters?")) {
    lib += num;
  };
  if (confirm("Do you want special characters?")) {
    lib += special;
  };
  if (lib.length === 0) {
    alert("You need to choose some time of wanted characters! Existing...");
    return null;
  };
  return pwGenerator(pwLength, lib);
}

function pwGenerator(pwLength, lib) {
  //creates random password
  let pw = "";
  for (i =0; i <pwLength; i++) {
    let x = Math.floor(Math.random() * lib.length)
    pw += lib[x];
  }
  return pw;
}