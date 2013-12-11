/*
Have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3.

Correct Sample Outputs
Input = 7 & 3    Output = 1
Input = 36 & 54  Output = 18
*/

var lowestNumberFirst = function(num1, num2) {
  if (num1 > num2) {
    return [num2, num1];
  }
  return [num1, num2];
}

var Division = function(num1, num2) {
  var sortedNumbers = lowestNumberFirst(num1, num2);
  var result = 1;
  for (var i = 2; i < num1; i++) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      result = i;
    }
  }
  return result;
};

console.log(Division(12, 16));       // 4
console.log(Division(7, 3));         // 1
console.log(Division(36, 54));       // 18
