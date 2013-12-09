/*

Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

Correct Sample Outputs
Input = "aabbcde"  Output = "2a2b1c1d1e"
Input = "wwwbbbw"  Output = "3w3b1w"

*/

var RunLength = function(str) {
  var currentLetterTotal = 0;
  var resultArray = [];
  var currentLetterTotal = 0;
  for (var i = 0; i < str.length; i++) {
    currentLetterTotal++;
    if (str[i] !== str[i + 1]) {
      resultArray.push(currentLetterTotal + str[i]);
      currentLetterTotal = 0;
    }
  }
  return resultArray.join("");
};


console.log(RunLength("wwwggopp"));  // 3w2g1o2p
console.log(RunLength("aabbcde"));   // 2a2b1c1d1e
console.log(RunLength("wwwbbbw"));   // 3w3b1w
