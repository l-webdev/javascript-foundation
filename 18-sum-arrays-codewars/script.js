function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

const array1 = [1, 5.2, 4, 0, -1];
console.log(sum(array1));
const array2 = [];
console.log(sum(array2));
const array3 = [-2.398];
console.log(sum(array3));
