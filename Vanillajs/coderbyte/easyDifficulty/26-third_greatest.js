/*

Have the function ThirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within in. So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters.

Correct Sample Outputs
Input = "coder","byte","code"    Output = "code"
Input = "abc","defg","z","hijk"  Output = "abc"

*/

var ThirdGreatest = function(strArr) {
  // var greatestLength = 0;
  var greatest1 = "";
  var greatest2 = "";
  var greatest3 = "";
  for (var i = strArr.length - 1; i >= 0; i--) {
    if (strArr[i].length >= greatest1.length) {
      greatest3 = greatest2;
      greatest2 = greatest1;
      greatest1 = strArr[i];
    } else if (strArr[i].length >= greatest2.length) {
      greatest3 = greatest2;
      greatest2 = strArr[i];
    } else if (strArr[i].length >= greatest3.length) {
      greatest3 = strArr[i];
    }
  }  
  return greatest3;
};


console.log(ThirdGreatest(["hello", "world", "before", "all"]));  // world
console.log(ThirdGreatest(["hello", "world", "after", "all"]));   // after
console.log(ThirdGreatest(["coder", "byte", "code"]));            // code
console.log(ThirdGreatest(["abc", "defg", "z", "hijk"]));         // abc
