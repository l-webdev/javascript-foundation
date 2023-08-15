function highAndLow(numbers) {
  const numArray = numbers.split(" ");
  let max = parseInt(numArray[0]);
  let min = parseInt(numArray[0]);
  for (let i = 1; i < numArray.length; i++) {
    const num = parseInt(numArray[i]);
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  return max + " " + min;
}

const string1 = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";
console.log(highAndLow(string1));
const string2 = "1 2 3";
console.log(highAndLow(string2));
