/*

Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

Correct Sample Outputs
Input = "Hello apple pie"  Output = "Hello"
Input = "No words"         Output = -1

*/


var LetterCountI = function(str) {
  var strArr = str.split(" ");
  for (var i = 0; i < strArr.length; i++) {
    // each word
    var result = "";
    var resultTotal = 0;
    var letterTotal = 0;
    var wordTotal = 0;
          console.log(sortedWord);
    for (var j = 0; j < sortedWord.length; j++) {
      // each letter
          console.log(sortedWord);
      if (sortedWord[j] !== sortedWord[j + 1]) {
        letterTotal++;
        if (letterTotal >= 2) {
          wordTotal += letterTotal;
          letterTotal = 0;
        } 
      } else if (sortedWord[j] === sortedWord[j + 1]) {
        letterTotal++;
      } else break;
    }
    if (wordTotal > resultTotal) {
      resultTotal = wordTotal;
      result = strArr[i];
      wordTotal = 0;
    }
    if (resultTotal > 0) {
      return result;
    } else {
      return -1;
    }
  }
};


// console.log(LetterCountI("Hello apple pie"));                   // Hello
// console.log(LetterCountI("No words"));                          // -1
console.log(LetterCountI("Today, is the greatest day ever!"));  // greatest



