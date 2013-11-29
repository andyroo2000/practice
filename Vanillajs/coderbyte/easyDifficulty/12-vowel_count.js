/*

Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. 

Correct Sample Outputs

Input = "hello"      Output = 2
Input = "coderbyte"  Output = 3

*/

var VowelCount = function(str) {
  var vowels = "aeiou";
  var result = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      result++
    }
  }
  return result;
};

console.log(VowelCount("hello"));
console.log(VowelCount("coderbyte"));
