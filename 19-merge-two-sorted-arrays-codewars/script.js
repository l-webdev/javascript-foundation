function mergeArrays(arr1, arr2) {
  /*The Set object lets you store unique values of any type, whether primitive values or object references.
    The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.*/
  const newSet = new Set([...arr1, ...arr2]);
  const newArray = Array.from(newSet).sort((a, b) => a - b);
  return newArray;
}

const array1_1 = [1, 2, 3, 4, 5];
const array1_2 = [6, 7, 8, 9, 10];
console.log(mergeArrays(array1_1, array1_2));
const array2_1 = [1, 3, 5, 7, 9];
const array2_2 = [10, 8, 6, 4, 2];
console.log(mergeArrays(array2_1, array2_2));
const array3_1 = [1, 3, 5, 7, 9, 11, 12];
const array3_2 = [1, 2, 3, 4, 5, 10, 12];
console.log(mergeArrays(array3_1, array3_2));
