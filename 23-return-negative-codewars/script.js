function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

const num1 = 1;
console.log(makeNegative(num1));
const num2 = -5;
console.log(makeNegative(num2));
const num3 = 0;
console.log(makeNegative(num3));
const num4 = 0.12;
console.log(makeNegative(num4));
