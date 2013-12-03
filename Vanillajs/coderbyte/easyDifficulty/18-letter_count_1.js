/*

Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

Correct Sample Outputs
Input = "Hello apple pie"  Output = "Hello"
Input = "No words"         Output = -1

*/

var LetterCountI = function(str) {
  var strNoPunctuation = str.replace(/[^a-z\s]/ig,"");  // strip punctuation
  var strArr = strNoPunctuation.split(" ");
  var resultTotal = 0;
  var letterCountInWord = 0;
  var countOfCurrentLetter = 0;
  var resultIndex;

  for (var i = 0; i < strArr.length; i++) {
    // each word
    var sortedWord = strArr[i].toLowerCase().split("").sort();
    letterCountInWord = 0;

    for (var j = 0; j < sortedWord.length; j++) {
      // each letter
      countOfCurrentLetter++;
      if ((sortedWord[j] !== sortedWord[j + 1]) && countOfCurrentLetter >= 2) {
        letterCountInWord += countOfCurrentLetter;
        countOfCurrentLetter = 0;
      }
      if (sortedWord[j] !== sortedWord[j + 1]) {
        countOfCurrentLetter = 0;        
      }
    }
    if (letterCountInWord > resultTotal) {
      resultTotal = letterCountInWord;
      resultIndex = i;
    }
  }
  if (resultTotal === 0) {
    return -1;
  } else return strArr[resultIndex];
};


console.log(LetterCountI("Hello apple pie"));                   // Hello
console.log(LetterCountI("No words"));                          // -1
console.log(LetterCountI("Today, is the greatest day ever!"));  // greatest
