var map = function(action, array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(action(array[i]));
  }
  return result;
}

var someArray = [1, 3, 5, 7];

var byFive = function(x) {
  return x * 5;
};

console.log(map(byFive, someArray));

var forEach = function(array, action) {
  for (var i = 0; i < array.length; i++) {
    action(array[i]);
  }
};

var reduce = function(combine, base, array) {
  forEach(array, function (element) {
    base = combine(base, element)
  });
  return base;
};

function add(a, b) {
  return a + b;
}

function sum(numbers) {
  return reduce(add, 0, numbers);
}

console.log(sum([2, 5, 9]));

someArray.reduce(function(prev, cur) {
  return prev + cur;
});

Array.prototype.alkasdjdslk = function(fn, initialVal) {
  var prev = initialVal;
  this.forEach(function(val, index, array) {
    prev = fn(prev, val, index, array);
  });
}

var Person = function(name) {
  this.name = name;
}

var pete = new Person('pete');

pete.sayHello();

pete.sayHello -> pete.__proto__.sayHello -> pete.__proto__.__proto__.sayHello -> until (__proto__ == Object)





