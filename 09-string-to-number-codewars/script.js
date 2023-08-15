const stringToNumber = function (str) {
  return +str; //The unary plus (+) operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
};

const string1 = "1234";
console.log(stringToNumber(string1));
const string2 = "605";
console.log(stringToNumber(string2));
const string3 = "1405";
console.log(stringToNumber(string3));
const string4 = "-7";
console.log(stringToNumber(string4));
