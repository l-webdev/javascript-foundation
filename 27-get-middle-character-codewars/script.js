function getMiddle(s) {
  const middleIndex = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return s[middleIndex - 1] + s[middleIndex];
  } else {
    return s[middleIndex];
  }
}

const getMiddle1 = "test";
console.log(getMiddle(getMiddle1));
const getMiddle2 = "testing";
console.log(getMiddle(getMiddle2));
const getMiddle3 = "middle";
console.log(getMiddle(getMiddle3));
const getMiddle4 = "A";
console.log(getMiddle(getMiddle4));
