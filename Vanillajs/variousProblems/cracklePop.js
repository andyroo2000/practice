// Code CracklePop
// 
// Write a program that prints out the numbers 1 to 100 (inclusive). If the number is divisible by 3, print Crackle instead of the number. If it's divisible by 5, print Pop. If it's divisible by both 3 and 5, print CracklePop. You can use any language.

function forEachInRange(beginningOfRange, endOfRange, action) {
  for (var i = beginningOfRange; i <= endOfRange; i++) {
    action(i);
  }
}

function print(val) {
  console.log(val);
}

function cracklePop (i) {
    if (isDivisibleByBoth(i, 3, 5)) {
      print("CracklePop");
    } else if (isDivisible(i, 3)) {
      print("Crackle");
    } else if (isDivisible(i, 5)) {
      print("Pop");
    } else {
      print(i);
    }
}

function isDivisibleByBoth(dividend, divisor1, divisor2) {
  if (isDivisible(dividend, 3) && (isDivisible(dividend, 5))) {
    return true;
  }
  return false;
}

function isDivisible(dividend, divisor) {
  if (dividend % divisor === 0) {
    return true;
  }
}

forEachInRange(1, 100, cracklePop);
