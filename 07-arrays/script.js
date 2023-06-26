// TODO: Implement the removeItem function
/*function removeItem(a, num) {
  if (a === animals && num === 1) {
    animals.slice(0);
    return removeItem;
  } /* else if ((a = animals && index !== 1)) {
    animals[0];
  }
} */

function removeItem(array, number) {
  const arrayCopy = [];
  for (let i = 0; i < array.length; i++) {
    arrayCopy[i] = array[i];
  }
  arrayCopy.splice(number - 1, 1);
  return arrayCopy;
}

const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

// TODO: Implement the sumOfCharacters function

function sumOfCharacters(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      count += array[i].length;
    }
  }
  return count;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
