class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallestInteger = args[0];
    for (let i = 0; i < args.length; i++) {
      if (args[i] < smallestInteger) {
        smallestInteger = args[i];
      }
    }
    return smallestInteger;
  }
}

const finder = new SmallestIntegerFinder();
const array1 = [34, 15, 88, 2];
console.log(finder.findSmallestInt(array1));
const array2 = [34, -345, -1, 100];
console.log(finder.findSmallestInt(array2));
