function abbrevName(name) {
  name = name.toUpperCase();
  const char = name[name.indexOf(" ") + 1];
  return name[0] + "." + char;
}

const string1 = "Sam Harris";
console.log(abbrevName(string1));
const string2 = "patrick feeney";
console.log(abbrevName(string2));
