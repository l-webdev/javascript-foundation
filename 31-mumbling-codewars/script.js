function accum(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase();
    result += s[i].toLowerCase().repeat(i);
    result += "-";
  }
  return result.slice(0, -1);
}

const mumble1 = "ZpglnRxqenU";
console.log(accum(mumble1));
const mumble2 = "NyffsGeyylB";
console.log(accum(mumble2));
const mumble3 = "MjtkuBovqrU";
console.log(accum(mumble3));
const mumble4 = "EvidjUnokmM";
console.log(accum(mumble4));
const mumble5 = "HbideVbxncC";
console.log(accum(mumble5));
