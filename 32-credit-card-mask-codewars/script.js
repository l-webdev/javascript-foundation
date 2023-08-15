// return masked string
function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  }
  const lastFourDigits = cc.slice(-4);
  const maskedPart = "#".repeat(cc.length - 4);
  return maskedPart + lastFourDigits;
}

const input1 = "4556364607935616";
console.log(maskify(input1));
const input2 = "1";
console.log(maskify(input2));
const input3 = "11111";
console.log(maskify(input3));
