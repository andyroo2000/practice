/*

Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.

Correct Sample Outputs
Input = "Hello-LOL"    Output = "hELLO-lol"
Input = "Sup DUDE!!?"  Output = "sUP dude!!?"

*/

var isUpperCase = function(letter) {
  if ((/[A-Z]/).test(letter)) {
    return true;
  }
  return false;
};

var isLowerCase = function(letter) {
  if ((/[a-z]/).test(letter)) {
    return true;
  }
  return false;
};


var SwapCase = function(str) {
  var strArray = str.split("");
  for (var i = 0; i < strArray.length; i++) {
    if (isUpperCase(strArray[i])) {
      strArray[i] = strArray[i].toLowerCase();
    }
    else if (isLowerCase(strArray[i])) {
      strArray[i] = strArray[i].toUpperCase();
    }
  }
  return strArray.join("");
};


console.log(SwapCase("Hello World"));  // hELLO wORLD
console.log(SwapCase("Hello-LOL"));    // hELLO-lol
console.log(SwapCase("Sup DUDE!!?"));  // sUP dude!!?
