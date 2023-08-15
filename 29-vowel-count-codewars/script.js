function getCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ("aeiouAEIOU".indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}

const vowelCount = "abracadabra";
console.log(getCount(vowelCount));
