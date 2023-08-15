function find(array, element) {
  const index = array.indexOf(element);
  return index !== -1 ? index : "Not found";
}

const array1 = [2, 3, 5, 7, 11];
console.log(find(array1, 5));
console.log(find(array1, 11));
console.log(find(array1, 3));
console.log(find(array1, 2));
console.log(find(array1, 7));
console.log(find(array1, 1));
console.log(find(array1, 8));

const array2 = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
console.log(find(array2, "Hello World"));
console.log(find(array2, "lorem ipsum"));
console.log(find(array2, "Lorem Ipsum"));
console.log(find(array2, false));
console.log(find(array2, true));
console.log(find(array2, Math.PI));
console.log(find(array2, 3.14));
console.log(find(array2, 6));
