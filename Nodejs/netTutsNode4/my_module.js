function hello() {
  return "world";
}

function helloWorld() {
  return hello() + ' again';
}

module.exports.hello = hello;
module.exports.helloWorldAgain = helloWorld;
