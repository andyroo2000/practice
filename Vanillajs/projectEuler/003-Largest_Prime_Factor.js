/*

Largest prime factor

Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/


var primeArr = function(num) {
  var factorArr = [];
  for (var i = 3; i < num / 2; i += 2) {
    if (num % i === 0) {
      factorArr.push(i);
    }
  }
  // return factorArr;
  var isPrime = function(num) {
    if (num % 2 === 0) {
      return false;
    }
    for (var i = 3; i < num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (var i = factorArr.length - 1; i >= 0; i--) {
    if (isPrime(factorArr[i])) {
      return factorArr[i];
    }
  }
};

// console.log(primeArr(13195));
console.log(primeArr(600851475143));
