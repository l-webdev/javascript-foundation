function descendingOrder(n) {
  const digits = n.toString().split("").map(Number);
  const sortedDigits = digits.sort((a, b) => b - a);
  return Number(sortedDigits.join(""));
}

const desOrd1 = 0;
console.log(descendingOrder(desOrd1));
const desOrd2 = 1;
console.log(descendingOrder(desOrd2));
const desOrd3 = 111;
console.log(descendingOrder(desOrd3));
const desOrd4 = 15;
console.log(descendingOrder(desOrd4));
const desOrd5 = 1021;
console.log(descendingOrder(desOrd5));
const desOrd6 = 123456789;
console.log(descendingOrder(desOrd6));
