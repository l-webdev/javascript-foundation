function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

const isIso1 = "Dermatoglyphics";
console.log(isIsogram(isIso1));
const isIso2 = "isogram";
console.log(isIsogram(isIso2));
const isIso3 = "aba";
console.log(isIsogram(isIso3));
const isIso4 = "moOse";
console.log(isIsogram(isIso4));
const isIso5 = "isIsogram";
console.log(isIsogram(isIso5));
const isIso6 = "";
console.log(isIsogram(isIso6));
