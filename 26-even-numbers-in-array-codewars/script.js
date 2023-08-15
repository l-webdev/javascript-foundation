function evenNumbers(array, number) {
  return array.filter((num) => num % 2 === 0).slice(-number);
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num1 = 3;
console.log(evenNumbers(arr1, num1));
const arr2 = [-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26];
const num2 = 2;
console.log(evenNumbers(arr2, num2));
const arr3 = [6, -25, 3, 7, 5, 5, 7, -3, 23];
const num3 = 1;
console.log(evenNumbers(arr3, num3));
