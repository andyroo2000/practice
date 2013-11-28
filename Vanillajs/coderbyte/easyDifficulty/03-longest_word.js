/*

Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

Correct Sample Outputs

Input = "fun&!! time" Output = "time"
Input = "I love dogs" Output = "love"

*/

var stripPunctuation = function(str) {
  return str.replace(/[^a-zA-Z ]/gm, "")
};

var LongestWord = function(sen) {
  var strippedString = stripPunctuation(sen);
  var senArray = strippedString.split(" ");
  var result = senArray[0];

  for (var i = 1; i < senArray.length; i++) {
    if (senArray[i].length > result.length) {
      result = senArray[i];
    }
  }
  return result;
};

console.log(LongestWord("fun@!! time"));
console.log(LongestWord("I love dogs"));
