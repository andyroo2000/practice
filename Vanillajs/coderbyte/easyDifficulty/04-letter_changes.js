/*

Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

Correct Sample Outputs
Input = "hello*3 "Output = "Ifmmp*3"
Input = "fun times! "Output = "gvO Ujnft!"

*/

var isVowel = function(letter) {
  var vowels = "aeiou";
  if (vowels.indexOf(letter) !== -1) {
    return true;
  }
};

var capitalizeVowels = function(str) {
  for (var i = 0; i < str.length; i++) {
    if(isVowel(str[i])) {
      str[i] = str[i].toUpperCase();
    }
  }
  return str;
};

var nextLetter = function(letter) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (alphabet.indexOf(letter) !== -1) {
    if (alphabet.indexOf(letter) === alphabet.length - 1) {
      return alphabet[0];
    } else {
      return alphabet[alphabet.indexOf(letter) + 1];
    }
  }
  return letter;
};

var LetterChanges = function(str) {
  var strArray = str.split("");
  for (var i = 0; i < str.length; i++) {
    strArray[i] = nextLetter(strArray[i]);
  }
  return capitalizeVowels(strArray).join("");
};

console.log(LetterChanges("hello*3"));
console.log(LetterChanges("fun times!"));
