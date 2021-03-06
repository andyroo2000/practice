/*

Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 

Correct Sample Outputs
Input = "coderbyte"  Output = "bcdeeorty"
Input = "hooplah"    Output = "ahhloop"

*/

var AlphabetSoup = function(str) {
  strArray = str.split("");
  return strArray.sort().join("");
};

console.log(AlphabetSoup("coderbyte"));
console.log(AlphabetSoup("hooplah"));
