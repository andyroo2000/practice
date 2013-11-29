/*

Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

Correct Sample Outputs
Input = "hello world"  Output = "Hello World"
Input = "i ran there"  Output = "I Ran There"

*/

var LetterCapitalize = function(str) {
  var wordsArray = str.split(" ");
  for (var i = 0; i < wordsArray.length; i++) {
    var lettersArray = wordsArray[i].split("");
    lettersArray[0] = lettersArray[0].toUpperCase();
    wordsArray[i] = lettersArray.join("");
  }
  return wordsArray.join(" ");
};

console.log(LetterCapitalize("hello world"));
console.log(LetterCapitalize("i ran there"));
