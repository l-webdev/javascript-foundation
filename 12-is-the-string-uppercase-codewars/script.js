String.prototype.isUpperCase = function () {
  for (let i = 0; i < this.length; i++) {
    //Inside a function, the value of this depends on how the function is called. Think about this as a hidden parameter of a function — just like the parameters declared in the function definition, this is a binding that the language creates for you when the function body is evaluated.
    if (this[i] !== this[i].toUpperCase()) {
      return false;
    }
  }
  return true;
};

const string1 = "c";
console.log(string1.isUpperCase());
const string2 = "C";
console.log(string2.isUpperCase());
const string3 = "hello I AM DONALD";
console.log(string3.isUpperCase());
const string4 = "HELLO I AM DONALD";
console.log(string4.isUpperCase());
const string5 = "ACSKLDFJSgSKLDFJSKLDFJ";
console.log(string5.isUpperCase());
const string6 = "ACSKLDFJSGSKLDFJSKLDFJ";
console.log(string6.isUpperCase());
