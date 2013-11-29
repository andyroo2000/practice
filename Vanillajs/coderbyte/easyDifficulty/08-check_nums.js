/*

Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1. 

Correct Sample Outputs
Input = 3,122  Output = "true"
Input = 67,67  Output = "-1"

*/

var areEqual = function(a, b) {
  if (a === b) {
    return true;
  }
}

var num2isGreater = function(a, b) {
  if (b > a) {
    return true;
  }
}

var CheckNums = function(num1, num2) {
  if (num2isGreater(num1, num2)) {
    return true;
  } else if (areEqual(num1, num2)) {
    return "-1";
  } else {
    return false;
  }
};

console.log(CheckNums(3, 122));
console.log(CheckNums(67, 67));
console.log(CheckNums(122, 3));
