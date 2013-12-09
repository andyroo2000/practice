/*

Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.

Correct Sample Outputs
Input = 19   Output = true
Input = 110  Output = false

*/

var PrimeTime = function(num) {
  if (num === 1) {
    return true;
  }
  if ((num === 2) || (num % 2 === 0)) {
    return false;
  }
  for (i = 3; i < num / 2; i += 2) {
    if (num % i === 0) {
      return false;
    } else {
    }
  }
  return true;
};

console.log(PrimeTime(19));   // true
console.log(PrimeTime(73));   // true
console.log(PrimeTime(127));  // true
console.log(PrimeTime(1453)); // true
console.log(PrimeTime(7879)); // true
console.log(PrimeTime(7919)); // true

console.log(PrimeTime(110));  // false
console.log(PrimeTime(91));   // false
console.log(PrimeTime(813));  // false
