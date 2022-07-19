// Assignment Code
var generateBtn = document.querySelector("#generate");

// window.onload = function () {
//   alert(
//     "IMPORTANT: A series of prompts will be presented with password criteria. When prompted, decide whether you wish to include the criteria by clicking 'ok' for yes, or 'cancel' to not include it in your final password."
//   );
// };
  
  const combineArr = [];

  const numArr = [0, 1, 2, 3];

  const upperArr = ["A", "B", "C", "D"];

  const lowerArr = ["a", "b", "c", "d"];

  const specialCharArr = ["%", "@", "$", "&"];

// const shuffleArrFunc = (finalArr) => {
//   return finalArr;
// }

const promptFunc = () => {

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

  return finalArr

};

function generatePassword() {
  promptFunc();
  // shuffleArrFunc(finalArr);
 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
