/*

Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 

Correct Sample Outputs:
Input = 4Output = 24
Input = 8Output = 40320

*/

var FirstFactorial = function(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
     return 1;
  } else {
    return num * FirstFactorial(num - 1);
  }
};

console.log(FirstFactorial(4));
console.log(FirstFactorial(8));
