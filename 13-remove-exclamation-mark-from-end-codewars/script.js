function remove(string) {
  if (string.endsWith("!")) {
    string = string.slice(0, -1);
  }
  return string;
}

const string1 = "Hi!";
console.log(remove(string1));
const string2 = "Hi!!!";
console.log(remove(string2));
const string3 = "!Hi";
console.log(remove(string3));
const string4 = "!Hi!";
console.log(remove(string4));
const string5 = "Hi! Hi!";
console.log(remove(string5));
const string6 = "Hi";
console.log(remove(string6));
