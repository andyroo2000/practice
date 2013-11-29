/*

Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 

Correct Sample Outputs
Input = "+d+=3=+s+"  Output = "true"
Input = "f++d+"  Output = "false"

*/

var isLetter = function(character) {
  var alphabetRegEx = (/[a-zA-Z]/m);
  return alphabetRegEx.test(character);
};

var isSurrounded = function(i, str) {
  var strBefore = str[i - 1];
  var strAfter = str[i + 1];
  if ((strBefore === "+") && (strAfter === "+")) {
    return true;
  } else return false;
};

var SimpleSymbols = function(str) {
  var result;
  for (var i = 0; i < str.length; i++) {
    if (isLetter(str[i])) {
      if (isSurrounded(i, str)) {
        result = true;
      } else {
        result = false;
        return result;
      }
    }
  }
  return result;
};

console.log(SimpleSymbols("+d+=3=+s+"));
console.log(SimpleSymbols("f++d+"));
