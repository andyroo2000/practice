/*

Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

Correct Sample Outputs
Input = "Hello apple pie"  Output = "Hello"
Input = "No words"         Output = -1

*/


var LetterCountI = function(str) {
  var strNoPunctuation = str.replace(/[^a-z\s]/ig,"");  // strip punctuation
  var strArr = strNoPunctuation.split(" ");
  var result = "";
  var resultTotal = 0;
  var letterCountInWord = 0;
  var countOfCurrentLetter = 0;

  for (var i = 0; i < strArr.length; i++) {
    // each word
    console.log(strArr[i]);
    var sortedWord = strArr[i].toLowerCase().split("").sort();
    console.log(sortedWord);
    letterCountInWord = 0;

    for (var j = 0; j < strArr[i].length; j++) {
      // each letter
      countOfCurrentLetter++;
      if ((strArr[i][j] !== strArr[i][j + 1]) && countOfCurrentLetter >= 2) {
        letterCountInWord += countOfCurrentLetter;
        console.log("letterCountInWord: " + letterCountInWord);
        countOfCurrentLetter = 0;
      }
    }
    if (letterCountInWord > resultTotal) {
      result = strArr[i];
    }
  }
  return result;
};


// console.log(LetterCountI("Hello apple pie"));                   // Hello
// console.log(LetterCountI("No words"));                          // -1
console.log(LetterCountI("Today, is the greatest day ever!"));  // greatest



