function solution(str) {
  return str.split("").reverse().join("");
}

const string1 = "world";
console.log(solution(string1));
const string2 = "hello";
console.log(solution(string2));
const string3 = "";
console.log(solution(string3));
const string4 = "h";
console.log(solution(string4));
