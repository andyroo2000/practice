/*

Have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number.

Correct Sample Outputs
Input = 9    Output = 23
Input = 100  Output = 541

*/

var isPrime = function(num) {
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (var i = 3; i < num / 2; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};


var PrimeMover = function(num) {
  var primeArray = [2];
  for (var i = 3; primeArray.length < num; i += 2) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  return primeArray[primeArray.length - 1];
};


console.log(PrimeMover(9));    // 23
console.log(PrimeMover(16));   // 53
console.log(PrimeMover(100));  // 541
