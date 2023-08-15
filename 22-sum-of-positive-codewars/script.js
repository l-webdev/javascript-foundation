function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const array1 = [1, -4, 7, 12];
console.log(positiveSum(array1));
const array2 = [1, 2, 3, 4, 5];
console.log(positiveSum(array2));
const array3 = [1, -2, 3, 4, 5];
console.log(positiveSum(array3));
const array4 = [];
console.log(positiveSum(array4));
const array5 = [-1, -2, -3, -4, -5];
console.log(positiveSum(array5));
const array6 = [-1, 2, 3, 4, -5];
console.log(positiveSum(array6));
