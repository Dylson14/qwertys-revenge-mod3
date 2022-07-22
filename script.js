// Assignment Code
var generateBtn = document.querySelector("#generate");

// window.onload = function () {
//   alert(
//     "IMPORTANT: A series of prompts will be presented with password criteria. When prompted, decide whether you wish to include the criteria by clicking 'ok' for yes, or 'cancel' to not include it in your final password."
//   );
// };
  
  const combineArr = [];

  const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const upperArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  const lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  const specialCharArr = ["%", "@", "$", "&", "/", "!", "?", "*"];

const shuffleArrFunc = (finalArr, numChar) => {
  console.log("this is the array before it gets shuffled", finalArr);
  var password = "";
    for (var i = 0; i <= numChar; i++){
      var randomIndex = Math.floor(Math.random() * finalArr.length); //this will return a number remember
      console.log("random index follows here: ", randomIndex);
      password += finalArr[randomIndex]
      console.log("this is the password", password);
    }
    return password;
  }
  
const promptFunc = () => {
  let numChar = prompt("How many characters should your password contain between 8-128 characters?")
  console.log("this is numChar: ", numChar);

  if(numChar < 8 || numChar > 128){
    alert("character input is not between 8-128 characters, try again");
    numChar = 0;
    generatePassword();
    return ;
  }

  let lowerCase = confirm("Should your password have lower-case characters?");
  if (lowerCase) {
    console.log("lower-case accepted");
    combineArr.push(lowerArr);
  } else if (!lowerCase) {
    console.log("lower-case rejected");
  }
  
  console.log("*-------------------------------------------*");

  let numeric = confirm("Should your password have numbers?");
  if (numeric) {
    console.log("numbers accepted");
    combineArr.push(numArr);
  } else if (!numeric) {
    console.log("numbers rejected");
  }

  console.log("*-------------------------------------------*");

  let upperCase = confirm("Should your password have upper-case characters?");
  if (upperCase) {
    console.log("upper-case accepted");
    combineArr.push(upperArr);
  } else if (!upperCase) {
    console.log("upper-case rejected");
  }

  console.log("*-------------------------------------------*");

  let specialChar = confirm("Should your password have special characters?");
  if (specialChar) {
    console.log("special characters accepted");
    combineArr.push(specialCharArr);
  } else if (!specialChar) {
    console.log("special characters rejected");
  }

  console.log("*-------------------------------------------*");
  
  // this code merges the many arrays within the combineArr into one single array.
  var finalArr = [].concat.apply([], combineArr);
  console.log(finalArr);

  return shuffleArrFunc(finalArr, numChar)
};

function generatePassword() {

  return promptFunc();
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
