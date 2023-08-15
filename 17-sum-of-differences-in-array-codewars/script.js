function sumOfDifferences(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
}

const array1 = [2, 1, 10];
console.log(sumOfDifferences(array1));
const array2 = [-3, -2, -1];
console.log(sumOfDifferences(array2));
