var numbers = [0, 1, 3, 7, 12, 15];

function permutations(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  console.log(arr);
  return permutations(arr.shift());
}


console.log(permutations(numbers));
