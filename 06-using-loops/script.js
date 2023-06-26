// TODO: Implement the oddNumbers function

function oddNumbers(a, b) {
  let oddNumberOutput = "";
  if (a < 0 || b < 0) {
    return "invalid";
  } else {
    if (a < b) {
      for (index = a; index <= b; index++) {
        if (index % 2 != 0) {
          oddNumberOutput += index;
          if (index === b) {
            continue;
          } else {
            oddNumberOutput += ", ";
          }
        }
      }
    } else {
      for (index = b; index <= a; index++) {
        if (index % 2 != 0) {
          oddNumberOutput += index;
          if (index === b) {
            continue;
          } else {
            oddNumberOutput += ", ";
          }
        }
      }
    }
    return oddNumberOutput;
  }
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// TODO: Implement the charCount function

function charCount(word, char) {
  let count = 0;
  for (let index = 0; index < word.length; index++) {
    const currentCharacter = word[index];
    if (currentCharacter === char) {
      count += 1;
    }
  }
  return count;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
