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

let charLibObj = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  num: "0123456789",
  special: ` !#$%&'()*+,-./:;<=>?@[]^_\`{|}~"`
};

let chosenLibsArr = [];
let pwLength = 0;

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
  //ask user for length of password
  while (!pwLength) {
    let wantedLen = prompt("How long do you want your password? Integers only please... between 8 and 128");
    wantedLen = parseInt(wantedLen, 10);
    if (typeof wantedLen === "number" && wantedLen > 7 && wantedLen < 129) {
        pwLength = wantedLen;
      }
  }
  //ask user for which character set to use
  if (confirm("Do you want uppercase characters?")) {
    chosenLibsArr.push('upper');
  };
  if (confirm("Do you want lowercase characters?")) {
    chosenLibsArr.push('lower');
  };
  if (confirm("Do you want numeric characters?")) {
    chosenLibsArr.push('num');
  };
  if (confirm("Do you want special characters?")) {
    chosenLibsArr.push('special');
  };
  if (chosenLibsArr.length === 0) {
    alert("You need to choose some time of wanted characters! Existing...");
    return null;
  };
  return pwGenerator();
}

function pwGenerator() {
  let pw = "";
  let countLibs = chosenLibsArr.length;
  //sets inital pw characters to ensure chosen types in pw
  for (let i = 0; i < countLibs; i++) {
    let lib = charLibObj[chosenLibsArr[i]];
    let x = Math.floor(Math.random() * lib.length);
    pw += lib[x];
  }
  //randomly fills the remaining pw characters from different possible character sets
  let remainingChar = pwLength - countLibs;
  for (let i = 0; i < remainingChar; i++) {
    let lib = charLibObj[chosenLibsArr[Math.floor(Math.random() * countLibs)]];
    let x = Math.floor(Math.random() * lib.length);
    pw += lib[x];
  }
  //return shuffle pw to randomize inital chars with the rest
  return shuffle(pw);
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    // pick a remaining element in array
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    //exchange it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}