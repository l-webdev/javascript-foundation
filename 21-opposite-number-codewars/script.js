function opposite(number) {
  if (number < 0) {
    return Math.abs(number);
  } else if (number > 0) {
    return -number;
  } else {
    return 0;
  }
}

const number1 = 1;
console.log(opposite(number1));
const number2 = 14;
console.log(opposite(number2));
const number3 = -34;
console.log(opposite(number3));
